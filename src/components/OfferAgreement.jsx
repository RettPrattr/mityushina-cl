import Link from "next/link";
import useWindowDimensions from "./hooks/useWindowDimensions";

const OfferAgreement = () => {
    
    const [width] = useWindowDimensions();

    return (
        <div className="flex flex-row offersContainer">
            {width > 800 ?
            <div className="menuContainer">
                <div className="menu flex flex-col">
                    <Link href="/privacy">
                        <div className="menuItem">
                            Политика конфиденциальности
                        </div>
                    </Link>
                    <Link href="/offer">
                        <div className="menuItem activeBottom">
                            Договор офферты
                        </div>
                    </Link>
                </div>
            </div> : ''}
            <div className="content flex flex-col">
                <div className="contentTitle">
                    ДОГОВОР ПУБЛИЧНОЙ ОФЕРТЫ НА ОКАЗАНИЕ УСЛУГ
                </div>
                <div className="contentText">
                    <div className="textTitle"><p>г. Москва 01.05.2023 г.</p></div>
                    <div className="contentItem">
                        <p>1. Общие положения.</p>
                        <p>1.1. ИП Митюшина Наталья Михайловна публикует Публичную оферту об оказании психологических Услуг, представленных на официальном интернет-сайте Исполнителя https://mityushina.ru.</p>
                        <p>1.2. В соответствии со статьей 437 Гражданского Кодекса Российской Федерации (далее – ГК РФ) данный документ является публичной офертой. И в соответствии со статьей 438 ГК РФ, в случае акцепта аферты, путем принятия изложенных ниже условий физическим или юридическим лицом, и проведения оплаты Услуг Исполнителя в соответствии с условиями настоящего Договора, Договор считается заключенным.</p>
                        <p>1.3. На основании вышеизложенного, если Вы не согласны с каким-либо пунктом оферты, Вам предлагается отказаться от использования Услуг, предоставляемых Исполнителем, либо заключить индивидуальный договор на оказание услуг.</p>
                        <p>1.4. В настоящей оферте, нижеприведенные термины имеют следующие значения:</p>
                        <p>«Оферта» – публичное предложение Исполнителя, адресованное любому физическому лицу (гражданину) или юридическому лицу, заключить с ним договор оказания услуг (далее – «Договор») на существующих условиях, содержащихся в Договоре.</p>
                        <p>«Заказчик» – физическое лицо или юридическое лицо, заключившее с Исполнителем Договор на условиях, содержащихся в настоящей оферте.</p>
                        <p>«Специалист» - психолог, консультант, тренер оказывающий услуги Заказчику.</p>
                        <p>«Акцепт» – полное и безоговорочное принятие Заказчиком условий Договора.</p>
                        <p>«Услуги» – перечень видов оказываемых услуг, представленный на официальном интернет-сайте Исполнителя https://mityushina.ru</p>
                        <p>«Заказ» – вид(ы) услуг, заказываемых Заказчиком при оформлении заявки на интернет-сайте или через Администратора.</p>
                        <p>«ПО» — программное обеспечение для доступа к информационным ресурсам, находящихся в сети интернет, и для обработки предоставляемой информации. Заказчик обязуется самостоятельно обеспечить наличие работоспособного ПО на своем персональном компьютере.</p>
                        <p>«Сайт» — принадлежащий Исполнителю с совокупностью информации, текстов, графических элементов, дизайна, изображений, фото и видеоматериалов и иных результатов интеллектуальной деятельности, а также компьютерных программ, содержащихся в информационной системе, обеспечивающей доступность такой информации в сети Интернет по сетевому адресу https://mityushina.ru</p>
                        <p>1.5. Лицо, осуществившее акцепт настоящей публичной оферты, приобретает все права и обязанности Заказчика, предусмотренные настоящим договором.</p>
                        <p>1.6. Акцептом настоящей публичной оферты является осуществление Заказчиком полной или частичной оплаты услуг в соответствии с условиями настоящего договора. С момента поступления денежных средств в счет оплаты оказываемых услуг на расчетный счет Исполнителя, настоящий договор считается заключенным между Заказчиком и Исполнителем.</p>
                    </div>
                    <div className="contentItem">
                        <p>2. Предмет договора.</p>
                        <p>2.1. Предметом настоящего Договора является возмездное предоставление Заказчику услуг в виде проведения индивидуальных и групповых сессий, вебинаров, семинаров (мастер-классов), практических тренингов (в виде очных и/или онлайн мероприятий) далее — «Услуги», «Услуга».</p>
                        <p>2.2. Заказчик оплачивает Услуги, а Исполнитель принимает на себя обязательства исполнить такие Услуги, в соответствии с выбранным Заказчиком пакетом услуг.</p>
                        <p>2.3. Темы, программы, стоимость Услуг и форма регистрации размещены на сайте продажи такой Услуги.</p>
                        <p>2.4. Услуги по настоящему договору оказываются Исполнителем следующим образом: в виде организации и проведения онлайн-сессий/мероприятий или предоставления доступа к записям мероприятий Исполнителя дистанционно через сеть Интернет, посредством программного обеспечения (ПО); очные мероприятия осуществляются путем организации и проведения психологической сессии в г.Москва.</p>
                        <p>2.5. Настоящий Договор является официальным документом Исполнителя и неотъемлемой частью Оферты. Действующая версия настоящего договора размещена на интернет-сайте Исполнителя https://mityushina.ru</p>
                    </div>
                    <div className="contentItem">
                        <p>3. Оформление Заказа.</p>
                        <p>3.1. Заказ Услуги осуществляется Заказчиком через Интернет-сайт https://mityushina.ru или через Администратора по телефону +7 916 964 0266.</p>
                        <p>3.2. При оформлении заявки Заказчик обязуется предоставить следующую информацию о себе:</p>
                        <p>- фамилию, имя, отчество;</p>
                        <p>- адрес электронной почты;</p>
                        <p>- контактный телефон (мобильный).</p>
                        <p>3.3. Исполнитель обязуется не сообщать данные Заказчика, указанные при оформлении заявки, лицам, не имеющим отношения к исполнению Заказа.</p>
                        <p>3.4. Исполнитель не несет ответственности за содержание и достоверность информации, предоставленной Заказчиком при оформлении Заказа.</p>
                        <p>3.5. Заказчик несёт ответственность за достоверность предоставленной информации при оформлении Заказа.</p>
                        <p>3.6. Оплата Заказчиком самостоятельно оформленной на интернет-сайте Заявки означает согласие Заказчика с условиями настоящего Договора. День поступления оплаты Услуги на расчетный счет Исполнителя является датой заключения настоящего Договора между Исполнителем и Заказчиком.</p>
                        <p>3.7. Все информационные материалы, представленные на сайте носят справочный характер и не могут в полной мере передавать достоверную информацию о порядке оказания Услуги. В случае возникновения у Заказчика вопросов, касающихся проведения услуг, перед оформлением Заявки ему необходимо обратиться за консультацией к Администратору.</p>
                    </div>
                    <div className="contentItem">
                        <p>4. Сроки оказания Услуг.</p>
                        <p>4.1. Срок оказания Услуги оговаривается с Заказчиком индивидуально в зависимости от графика работы Специалиста.</p>
                        <p>4.2. Услуги по настоящему договору считаются оказанными с надлежащим качеством и в срок, а также принятыми Заказчиком, если в течение 3 (трех) календарных дней по истечению срока, указанного в п. 4.1 настоящего договора для соответствующей услуги, Заказчик не заявил мотивированного возражения на качество и объем таких услуг путем отправки заявления по электронному адресу nm@mityushina.ru</p>
                        <p>4.3. Время проведения мероприятий по настоящему договору указывается по московскому времени.</p>
                        <p>4.4. В случае предоставления Заказчиком недостоверной информации его контактных данных, Исполнитель не несет ответственности за ненадлежащее оказание Услуги.</p>
                    </div>
                    <div className="contentItem">
                        <p>5. Порядок оплаты Услуг.</p>
                        <p>5.1. Оплата всех услуг по настоящему Договору осуществляется в виде стопроцентной предоплаты и в порядке, устанавливаемом настоящим Договором.</p>
                        <p>5.2. Моментом оплаты считается поступление средств в кассу Исполнителя или на расчетный счет Исполнителя.</p>
                        <p>5.3. Оплата Услуг осуществляется путем безналичного расчета путем:</p>
                        <p>- банковского перевода (перечисления денежных средств на расчетный счет Исполнителя),</p>
                        <p>- с помощью кредитной или дебетовой банковской карты через сайт Исполнителя.</p>
                        <p>5.4. Стоимость услуг исполнителя указана в Перечне услуг. Реквизиты для оплаты Услуг указаны в п. 10 настоящего Договора.</p>
                        <p>5.5. При безналичной форме оплаты Заказчик самостоятельно оплачивает услуги банков, связанные с перечислением денежных средств на счет Исполнителя.</p>
                        <p>5.6. Заказчик самостоятельно несет ответственность за правильность производимых им платежей.</p>
                        <p>5.7. При возникновении проблем с проведением оплаты Заказчику необходимо связаться с Исполнителем с помощью электронной почты nm@mityushina.ru или с помощью мессенджера Whatsapp +7 916 964 0266</p>
                    </div>
                    <div className="contentItem">
                        <p>6. Порядок оказания услуг.</p>
                        <p>6.1. Заказчик оплачивает Услугу в соответствии с п.п. 4.1.-4.4. настоящего Договора.</p>
                        <p>6.2. При безналичной форме оплаты Заказчик сообщает Исполнителю данные о произведенной оплате (сумма, дата, данные отправителя и назначение платежа).</p>
                        <p>6.3. Исполнитель имеет право отказать в предоставлении Услуг Заказчику в случае, если:</p>
                        <p>- клиент состоит на учете в психоневрологическом диспансере;</p>
                        <p>- нарушаются уголовные или этические нормы;</p>
                        <p>- присутствуют временные организационные причины.</p>
                        <p>В любом случае Исполнитель сообщает Заказчику о готовности работать с его ситуацией.</p>
                        <p>6.4. Услуги оказываются в объеме, соответствующем сумме оплаты Услуг.</p>
                        <p>6.5. Обязательства сторон считаются исполненными надлежащим образом после оказания Заказчику Услуг в объеме, соответствующем сумме их оплаты.</p>
                        <p>6.6. Исполнитель не несет ответственности, как перед Заказчиком, так и перед третьими лицами, за качество и последствия оказанных Заказчику услуг и не возвращает внесенной оплаты в случае, если Заказчик скрыл от Исполнителя то, что он состоит на учете в психоневрологическом диспансере, а также скрыл, или исказил иную информацию, необходимую Исполнителю для качественного оказания Услуг.</p>
                        <p>6.7. Для оказания услуг по проведению индивидуальных психологических сессий информация о времени и месте проведения такой консультации предоставляется на электронную почту Заказчика, указанную при совершении оплаты (регистрации на Услугу), если иной порядок уведомления не установлен Сторонами. Исполнением обязательства по оказанию Услуги, указанной в настоящем пункте, считается факт проведения такой сессии в сроки, количестве и в порядке, установленным на сайте продажи такой Услуги либо согласованным Сторонами. В случае, если Заказчик не участвовал (не явился на сессию) без уважительных причин либо не согласовал не позднее чем за 24 часа до назначенной сессии иное время проведения Услуги, обязательства Исполнителя по оказанию такой Услуги считаются выполненными в полном объеме. Опоздание Заказчиком на сессию не продлевается и оплачивается в полном объеме от установленной суммы за сессию.</p>
                    </div>
                    <div className="contentItem">
                        <p>7. Права, обязанности и ответственность cторон.</p>
                        <p>7.1. Исполнитель обязан:</p>
                        <p>7.1.1. Оказать указанные Услуги в соответствии с пунктами настоящего Договора.</p>
                        <p>7.1.2. Оказывать услуги согласно назначенному расписанию и заявке Заказчика. В случае изменения времени назначенной консультации Исполнитель обязан уведомить об этом Заказчика не позднее, чем за 24 часа до начала назначенной консультации.</p>
                        <p>7.1.3. Сохранять анонимность консультирования, кроме случаев, предусмотренных действующим законодательством РФ.</p>
                        <p>7.2. Исполнитель вправе:</p>
                        <p>7.2.1. Использовать материалы, полученные в результате оказания услуг, в методических целях, в качестве примеров работы, фрагментарно, без указания имен и данных Клиента.</p>
                        <p>7.2.2. Прекратить оказание услуг Заказчику в случае неуважительного общения Заказчика с Исполнителем, сокрытия факта состояния на учете в психоневрологическом диспансере, несвоевременной оплаты консультаций, появления на консультации в нетрезвом состоянии и других причин, которые Исполнитель посчитает достаточными для прекращения работы.</p>
                        <p>7.3. Заказчик обязан:</p>
                        <p>7.3.1. Оплатить Услуги в соответствии с пунктами настоящего Договора.</p>
                        <p>7.3.2. Выполнять рекомендации Специалиста в соответствии с условиями работы Исполнителя.</p>
                        <p>7.3.3. О переносе или отмене консультации сообщить Исполнителю не позднее чем за 24 часа до назначенного времени приема. В противном случае пропущенная консультация оплачивается полностью.</p>
                        <p>7.4. Заказчик вправе:</p>
                        <p>7.4.1. Получать от Исполнителя оказание услуг в объеме и количествах, соответствующих условиям настоящего Договора.</p>
                        <p>7.4.2. В случае отказа Исполнителя от выполнения Договора потребовать от Исполнителя возвращения денежных средств, внесенных на расчетный счет Исполнителя за еще не оказанную услугу или курс консультаций, за исключением случаев, предусмотренных п.4.4 и п.6.6 настоящего Договора.</p>
                        <p>7.5. Споры и претензии по данному Договору регулируются путем переговоров, а в случае невозможности прийти к соглашению - действующим законодательством.</p>
                        <p>7.6. Стороны признают, что все уведомления, сообщения, соглашения, документы и письма, направленные с использованием уполномоченных адресов электронной почты, считаются направленными и подписанными Сторонами, кроме случаев, когда в таких письмах прямо не указано обратное.</p>
                        <p>7.7. Стороны установили, что скриншоты переписки по электронной почте или в сообщении в мессенджере, совершенной по реквизитам, указанным в настоящем Договоре, во исполнение настоящего Договора, являются достаточным и допустимым доказательством для подтверждения тех фактов, которые в них указаны.</p>
                    </div>
                    <div className="contentItem">
                        <p>8. Персональные данные и их использование.</p>
                        <p>8.1. Заказчик дает свое согласие Исполнителю на обработку своих персональных данных, предоставленных при покупке Услуг по настоящему договору, согласно Политики конфиденциальности, размещенной на Сайте.</p>
                        <p>8.2. Обработка персональных данных означает запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (распространение, предоставление, доступ), обезличивание, блокирование, удаление, уничтожение персональных данных, не подпадающих под специальные категории, на обработку которых, согласно действующему законодательству Российской Федерации, требуется письменное согласие Заказчика.</p>
                        <p>8.3. Заказчик дает согласие на получение информационных рассылок и рекламных материалов от Исполнителя на адрес электронной почты и контактный телефон, указанные Заказчиком при покупке Услуг. Согласие на получение информационных рассылок и рекламных материалов может быть отозвано Заказчиком в любое время путем направления Исполнителю соответствующего уведомления на адресу: nm@mityushina.ru</p>
                        <p>8.4. Заказчик может в любое время отозвать согласие на обработку персональных данных, направив Исполнителю соответствующее уведомление на адрес: nm@mityushina.ru</p>
                    </div>
                    <div className="contentItem">
                        <p>9. Защита авторских прав.</p>
                        <p>9.1. Сайт, с которого осуществляется продажа Услуг Исполнителя или непосредственное оказание таких Услуг содержат результаты интеллектуальной деятельности, принадлежащие Исполнителю.</p>
                        <p>9.2. Используя сайт Исполнителя, Заказчик признает и соглашается с тем, что все содержимое сайта и структура его содержимого защищены авторским правом, правом на товарный знак и другими правами на результаты интеллектуальной деятельности, и что указанные права являются действительными и охраняются во всех формах, на всех носителях и в отношении всех технологий, как существующих в настоящее время, так и разработанных или созданных впоследствии. Никакие права на любое содержимое сайта Исполнителя, включая, помимо прочего, аудиовизуальные произведения, текстовые и графические материалы, компьютерные программы, товарные знаки не переходят к Заказчику в результате пользования сайтом и заключения настоящего договора.</p>
                        <p>9.3. При цитировании материалов сайта Исполнителя Заказчик обязуется указывать ссылку на такой сайт.</p>
                        <p>9.4. В случае нарушения Заказчиком положений настоящего договора, касающихся защиты авторских прав Исполнителя, последний вправе потребовать компенсации всех причиненных убытков, включая упущенную выгоду.</p>
                    </div>
                    <div className="contentItem">
                        <p>10. Реквизиты Исполнителя.</p>
                        <p>ИП Митюшина Наталья Михайловна</p>
                        <p>ИНН 772579522882</p>
                        <p>ОГРНИП 318774600251836</p>
                        <p>Расчётный счёт 4080281043800003349 в ПАО СБЕРБАНК г. Москва</p>
                        <p>Корреспондентский счёт банка 30101810400000000225</p>
                        <p>Юридический адрес 173000, г. Москва, ул. Трофимова 9-59</p>
                        <p>e-mail: nm@mityushina.ru</p>
                        <p>Телефон: +7 916 964 0266</p>
                    </div>
                    <div className="contentTitle">
                    Перечень услуг
                    </div>
                    <div className="contentItem">
                        <div className="numberList">
                        <p>1. Ознакомительная онлайн-сессия с Натальей Митюшиной</p>
                        <p className="price">Цена: 1500 рублей 00 копеек</p>
                        <p>2. Онлайн-сессия с Натальей Митюшиной</p>
                        <p className="price">Цена: 5500 рублей 00 копеек</p>
                        <p>3. Офлайн-сессия с Натальей Митюшиной</p>
                        <p className="price">Цена: 7500 рублей 00 копеек</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OfferAgreement