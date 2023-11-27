import delve from "dlv";
import BlockManager from "@/components/shared/BlockManager";
import getDataDependencies from "@/components/utils/api";
import Layout from "@/components/layouts/Layout"
import CalendarModal from "@/components/CalendarModal";
import useWindowDimensions from "@/components/hooks/useWindowDimensions";
import { useRouter } from "next/router";
import { parse } from 'url'
import { useContext, useEffect, useState } from "react";
import UnsuccessfulModal from "@/components/UnsuccessfulModal";
import { AllContexts } from "@/components/context/Context";
import ResultModal from "@/components/ResultModal";
import axios from "axios";


const Universals = ({ pageData }) => {
  
    const blocks = delve(pageData, "blocks");

    const [width] = useWindowDimensions();
    const router = useRouter()

    const { query } = parse(router.asPath, true)
    
    const [key, setKey] = useState(query.key)
    const {isActive, setIsActive, setOrder} = useContext(AllContexts)
    
    const isSuccessPayment = query.payment === 'true' ? true : false
    const unsuccessful = query.unsuccessful

    const condition = () => {
        return (
            Boolean((isActive || isSuccessPayment) && width < 800)
        )
    }

    useEffect(() => {
        if (key) {
            (async ()=>{
                const response = await axios.get(`${process.env.API_LINK}/api/orders?populate=deep&filters[uid][$eq]=${key}`)
                const orderResponse = response?.data?.data?.[0]?.attributes
                setOrder({
                    ...orderResponse,
                    tariff: orderResponse?.rates[0],
                    id: response?.data?.data?.[0]?.id
                })
                if (orderResponse) {
                    setIsActive(true)
                }
            })()
        }
    }, [])

    if (unsuccessful && width > 800) return <Layout><UnsuccessfulModal/><BlockManager blocks={blocks} /></Layout>
    if (unsuccessful && width < 800) return <Layout><UnsuccessfulModal/></Layout>

    return (
        <Layout>
            {isActive && <CalendarModal/>}
            {isSuccessPayment && <ResultModal />}
            {!condition() && <BlockManager blocks={blocks}/>}
        </Layout> 
    )

};

export async function getServerSideProps(context) {
  try {
    const res = await fetch(`${process.env.API_LINK}/api/main-page/?slug=&populate=deep,20&populate=image`);
    const json = await res.json();
    const pageData = await getDataDependencies(delve(json.data, 'attributes'));

    return {
      props: { pageData },
    };
  } catch (error) {
    return {
      props: { error }
    };
  }
}

export default Universals;