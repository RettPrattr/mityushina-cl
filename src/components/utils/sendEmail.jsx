import axios from "axios";

const sendEmail = async (zoom, destination, timeData, formatData, moneyData, selectedData, link) => {

    const subject = 'Запись на сессию с Натальей Митюшиной'
    const text = 'Вы записались на сессию с Натальей Митюшиной'

    const html = `
    <!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="x-apple-disable-message-reformatting">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title></title>
        <style type="text/css">
            body {margin: 0; padding: 0; font-family: 'Roboto' !important}
            table, tr, td {vertical-align: top; border-collapse: collapse;}
            p {margin: 0;}
            .ie-container table, .mso-container table {table-layout: fixed;}
            * {line-height: inherit;}
            a[x-apple-data-detectors='true'] {color: inherit !important; text-decoration: none !important;}
            table, td { color: #000000; } 
            #u_body a { color: inherit; text-decoration: none; } 
            @media only screen and (min-width: 620px) {
            .u-row {width: 600px !important;}
            .u-row .u-col {vertical-align: top;}
            .u-row .u-col-36 {width: 216px !important;}
            .u-row .u-col-50 {width: 300px !important;}
            .u-row .u-col-64 {width: 384px !important;}
            .u-row .u-col-100 {width: 600px !important;}}
            @media (max-width: 620px) {
            .u-row-container {
                max-width: 100% !important;
                padding-left: 0px !important;
                padding-right: 0px !important;}
            .u-row .u-col {
                min-width: 320px !important;
                max-width: 100% !important;
                display: block !important;}
            .u-row {width: 100% !important;}
            .u-col {width: 100% !important;}
            .u-col > div {margin: 0 auto;}}
            @media (max-width: 480px) { 
            #u_column_5 .v-col-padding { padding: 0px !important; } 
            #u_content_image_4 .v-container-padding-padding { padding: 20px !important; } 
            #u_content_image_4 .v-src-width { width: 100% !important; } 
            #u_content_image_4 .v-src-max-width { max-width: 100% !important; } 
            #u_column_6 .v-col-padding { padding: 0px !important; } 
            #u_content_image_6 .v-container-padding-padding { padding: 0px !important; } 
            #u_content_image_6 .v-src-width { width: auto !important; } 
            #u_content_image_6 .v-src-max-width { max-width: 20% !important; } 
            #u_content_image_6 .v-text-align { text-align: center !important; } 
            #u_column_1 .v-col-padding { padding: 20px 0px 0px 20px !important; } 
            #u_content_heading_1 .v-container-padding-padding { padding: 10px 10px 0px 0px !important; } 
            #u_content_heading_1 .v-font-size { font-size: 24px !important; } 
            #u_content_text_1 .v-container-padding-padding { padding: 5px 10px 10px 0px !important; } 
            #u_content_text_1 .v-font-size { font-size: 18px !important; } 
            #u_content_button_2 .v-container-padding-padding { padding: 10px 0px 0px !important; } 
            #u_row_3.v-row-padding--vertical { padding-top: 0px !important; padding-bottom: 0px !important; } 
            #u_column_15 .v-col-padding { padding: 20px 0px 50px 20px !important; } 
            #u_content_html_1 .v-container-padding-padding { padding: 0px !important; } 
            #u_column_2 .v-col-padding { padding: 20px 0px 0px !important; } 
            #u_content_image_8 .v-container-padding-padding { padding: 0px !important; } 
            #u_content_image_8 .v-src-width { width: auto !important; } 
            #u_content_image_8 .v-src-max-width { max-width: 79% !important; } 
            #u_content_image_8 .v-text-align { text-align: center !important; } 
            #u_content_text_3 .v-container-padding-padding { padding: 20px 0px 10px 20px !important; } 
            #u_content_text_3 .v-font-size { font-size: 10px !important; } 
            #u_content_text_3 .v-text-align { text-align: left !important; } 
            #u_column_9 .v-col-padding { padding: 0px 0px 10px 20px !important; } 
            #u_content_text_5 .v-container-padding-padding { padding: 0px 0px 20px !important; } 
            #u_content_text_5 .v-font-size { font-size: 10px !important; } }
        </style>
        <!--[if !mso]><!-->
        <link rel="preconnect" href="https://fonts.googleapis.com"> 
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> 
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap" rel="stylesheet">
        <!--<![endif]-->
    </head>
    <body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #efede9;color: #000000">
    <link rel="preconnect" href="https://fonts.googleapis.com"> 
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> 
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap" rel="stylesheet">
    <!--[if IE]><div class="ie-container"><![endif]-->
    <!--[if mso]><div class="mso-container"><![endif]-->
    <table id="u_body" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;vertical-align: top;Margin: 0 auto;background-color: #efede9;width:100%" cellpadding="0" cellspacing="0">
        <tbody>
        <tr style="vertical-align: top">
            <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #ffffff;"><![endif]-->
                <div class="u-row-container v-row-padding--vertical" style="padding: 0px;background-color: transparent">
                <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #f6f3ec;">
                    <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #f6f3ec;"><![endif]-->
                    <!--[if (mso)|(IE)]><td align="center" width="384" class="v-col-padding" style="background-color: #f6f3ec;width: 384px;padding: 40px 0px 0px 40px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                    <div id="u_column_5" class="u-col u-col-64" style="max-width: 320px;min-width: 384px;display: table-cell;vertical-align: top;">
                        <div style="background-color: #f6f3ec;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                        <!--[if (!mso)&(!IE)]><!-->
                        <div class="v-col-padding" style="box-sizing: border-box; height: 100%; padding: 40px 0px 0px 40px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                            <!--<![endif]-->
                            <table id="u_content_image_4" style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                            <tbody>
                                <tr>
                                <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:0px;font-family:'Open Sans',sans-serif;" align="left"> 
                                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                    <tr>
                                        <td class="v-text-align" style="padding-right: 0px;padding-left: 0px;" align="center">
                                        <img align="center" border="0" src="http://mityushina.ru/email/main-dark-logo.png" alt="logo" title="logo" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 100%;max-width: 384px;" width="384" class="v-src-width v-src-max-width"/>
                                        </td>
                                    </tr>
                                    </table>
                                </td>
                                </tr>
                            </tbody>
                            </table>
                            <!--[if (!mso)&(!IE)]><!-->
                        </div>
                        <!--<![endif]-->
                        </div>
                    </div>
                    <!--[if (mso)|(IE)]></td><![endif]-->
                    <!--[if (mso)|(IE)]><td align="center" width="216" class="v-col-padding" style="background-color: #f6f3ec;width: 216px;padding: 15px 0px 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                    <div id="u_column_6" class="u-col u-col-36" style="max-width: 320px;min-width: 216px;display: table-cell;vertical-align: top;">
                        <div style="background-color: #f6f3ec;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                        <!--[if (!mso)&(!IE)]><!-->
                        <div class="v-col-padding" style="box-sizing: border-box; height: 100%; padding: 15px 0px 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                        <!--<![endif]-->
                            <table id="u_content_image_6" style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                            <tbody>
                                <tr>
                                <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:0px;font-family:'Open Sans',sans-serif;" align="left">
                                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                    <tr>
                                        <td class="v-text-align" style="padding-right: 0px;padding-left: 0px;" align="center"> 
                                        </td>
                                    </tr>
                                    </table>
                                </td>
                                </tr>
                            </tbody>
                            </table>
                        <!--[if (!mso)&(!IE)]><!-->
                        </div>
                        <!--<![endif]-->
                        </div>
                    </div>
                    <!--[if (mso)|(IE)]></td><![endif]-->
                    <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                    </div>
                </div>
                </div>
                <div class="u-row-container v-row-padding--vertical" style="padding: 0px;background-color: transparent">
                <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
                    <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
                    <!--[if (mso)|(IE)]><td align="center" width="600" class="v-col-padding" style="background-color: #f6f3ec;width: 600px;padding: 0px 0px 0px 40px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                    <div id="u_column_1" class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                        <div style="background-color: #f6f3ec;height: 100%;width: 100% !important;">
                        <!--[if (!mso)&(!IE)]><!-->
                        <div class="v-col-padding" style="box-sizing: border-box; height: 100%; padding: 20px 0px 0px 40px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
                            <table id="u_content_heading_1" style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                            <tbody>
                                <tr>
                                <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:0px 40px 0px 0px;font-family:'Open Sans',sans-serif;" align="left">                     
                                    <h1 class="v-text-align v-font-size" style="margin: 0px; color: #494646; line-height: 130%; text-align: left; word-wrap: break-word; font-family: 'Playfair Display',serif; font-size: 48px; font-weight: 400;">
                                    <strong>Запись подтверждена</strong>
                                    </h1>
                                </td>
                                </tr>
                            </tbody>
                            </table>
                            <table id="u_content_text_1" style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                            <tbody>
                                <tr>
                                <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:20px 40px 0px 0px;font-family:'Open Sans',sans-serif;" align="left">
                                    <div class="v-text-align v-font-size" style="font-size: 20px; color: #494646; line-height: 140%; text-align: left; word-wrap: break-word;">
                                    <p style="line-height: 140%;">
                                        <span data-metadata="&lt;!--(figmeta)eyJmaWxlS2V5IjoiOFcxQlpRbk43YkVWVFFKVXVpelJEeCIsInBhc3RlSUQiOjE4Mzc1ODkyODAsImRhdGFUeXBlIjoic2NlbmUifQo=(/figmeta)--&gt;" style="line-height: 28px;"></span>
                                        Вы записаны на консультацию со мной, до встречи!<br/><br/>
                                        С уважением,<br/>
                                        Наталья Митюшина
                                    </p>
                                    
                                    </div>
                                </td>
                                </tr>
                            </tbody>
                            </table>
                            <table id="u_content_button_2" style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                            <tbody>
                                <tr>
                                <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:0px;font-family:'Open Sans',sans-serif;" align="left">
                                    <!--[if mso]>
                                    <style>.v-button {background: transparent !important;}</style>
                                    <![endif]-->
                                    <div class="v-text-align" align="left">
                                        <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="#" style="height:37px; v-text-anchor:middle; width:217px;" arcsize="54%"  stroke="f" fillcolor="#ffffff"><w:anchorlock/><center style="color:#494646;font-family:'Open Sans',sans-serif;"><![endif]-->  
                                        <!--[if mso]></center></v:roundrect><![endif]-->
                                    </div>
                                </td>
                                </tr>
                            </tbody>
                            </table>
                            <!--[if (!mso)&(!IE)]><!-->
                        </div>
                        <!--<![endif]-->
                        </div>
                    </div>
                    <!--[if (mso)|(IE)]></td><![endif]-->
                    <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                    </div>
                </div>
                </div>
                <div id="u_row_3" class="u-row-container v-row-padding--vertical" style="padding: 0px;background-color: transparent">
                <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
                    <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
                    <!--[if (mso)|(IE)]><td align="center" width="600" class="v-col-padding" style="background-color: #f6f3ec;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                    <div id="u_column_15" class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                        <div style="background-color: #f6f3ec;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                        <!--[if (!mso)&(!IE)]><!-->
                        <div class="v-col-padding" style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                            <!--<![endif]-->
                            <table id="u_content_html_1" style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                            <tbody>
                                <tr>
                                <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:30px 0px 50px 40px;font-family:'Open Sans',sans-serif;" align="left"> 
                                    <div>
                                    <div>
                                        <img align="right" border="0" src="https://mityushina.ru/email/timeIcon.png" alt="" title="" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 100%;max-width: 25px;" width="25" class="v-src-width v-src-max-width"/>
                                        <span style="display: inline-block; padding-top: 2px; margin-left: 15px; font-weight: 500; font-size: 16px; color: #494646">${timeData}</span>
                                    </div>
                                    <div style="margin-top: 10px">
                                        ${formatData === 'Zoom' ? `<img align="right" border="0" src="https://mityushina.ru/email/videocamIcon.png" alt="" title="" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 100%;max-width: 25px;" width="25" class="v-src-width v-src-max-width"/>` : 
                                        `<img align="right" border="0" src="https://mityushina.ru/email/peopleIcon.png" alt="" title="" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 100%;max-width: 25px;" width="25" class="v-src-width v-src-max-width"/>`}
                                        <span style="display: inline-block; padding-top: 2px; margin-left: 15px; font-weight: 500; font-size: 16px; color: #494646">${formatData} ${formatData === 'Zoom' ? `<a href=${zoom}>(ссылка)</a>` : ''}</span>
                                    </div>
                                    <div style="margin-top: 12px">
                                        <img align="right" border="0" src="https://mityushina.ru/email/cardIcon.png" alt="" title="" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 100%;max-width: 25px;" width="25" class="v-src-width v-src-max-width"/>
                                        <span style="display: inline-block; padding-top: 2px; margin-left: 15px; font-weight: 500; font-size: 16px; color: #494646">Оплачено ${moneyData}</span>
                                    </div>
                                    <div style="margin-top: 12px">
                                        <img align="right" border="0" src="https://mityushina.ru/email/calendarIcon.png" alt="" title="" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 100%;max-width: 25px;" width="25" class="v-src-width v-src-max-width"/>
                                        <span style="display: inline-block; padding-top: 2px; margin-left: 15px; font-weight: 500; font-size: 16px; color: #494646">${selectedData}</span>
                                    </div>
                                    <div style="margin-top: 30px">
                                        <a href="${link}" target="_blank" class="v-button v-font-size" style="box-sizing: border-box;display: inline-block;font-family:'Open Sans',sans-serif;text-decoration: none;-webkit-text-size-adjust: none;text-align: center;color: #494646; background-color: #ffffff; border-radius: 20px;-webkit-border-radius: 20px; -moz-border-radius: 20px; width:auto; max-width:100%; overflow-wrap: break-word; word-break: break-word; word-wrap:break-word; mso-border-alt: none;font-size: 14px; cursor: pointer !important;">
                                            <span style="display:block;padding:10px;line-height:120%; cursor: pointer !important;">
                                                <span style="line-height: 16.8px;">Изменить дату и время сессии</span>
                                            </span>
                                        </a>
                                    </div>
                                    </div>
                                </td>
                                </tr>
                            </tbody>
                            </table>
                            <!--[if (!mso)&(!IE)]><!-->
                        </div>
                        <!--<![endif]-->
                        </div>
                    </div>
                    <!--[if (mso)|(IE)]></td><![endif]-->
                    <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                    </div>
                </div>
                </div>
                <div class="u-row-container v-row-padding--vertical" style="padding: 0px;background-color: transparent">
                <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
                    <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
                    <!--[if (mso)|(IE)]><td align="center" width="300" class="v-col-padding" style="background-color: #494646;width: 300px;padding: 20px 0px 10px 40px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                    <div id="u_column_2" class="u-col u-col-50" style="max-width: 320px;min-width: 300px;display: table-cell;vertical-align: top;">
                        <div style="background-color: #494646;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                        <!--[if (!mso)&(!IE)]><!-->
                        <div class="v-col-padding" style="box-sizing: border-box; height: 100%; padding: 20px 0px 10px 40px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
                            <table id="u_content_image_8" style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                            <tbody>
                                <tr>
                                <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:0px 0px 0px 10px;font-family:'Open Sans',sans-serif;" align="left">
                                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                    <tr>
                                        <td class="v-text-align" style="padding-right: 0px;padding-left: 0px;" align="left">
                                        <img align="left" border="0" src="https://mityushina.ru/email/main-light-logo.png" alt="" title="" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 78%;max-width: 226.2px;" width="226.2" class="v-src-width v-src-max-width"/>
                                        </td>
                                    </tr>
                                    </table>
                                </td>
                                </tr>
                            </tbody>
                            </table>
                            <table id="u_content_text_3" style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                            <tbody>
                                <tr>
                                <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Open Sans',sans-serif;" align="left">
                                    
                            <div class="v-text-align v-font-size" style="font-size: 11px; line-height: 140%; text-align: left; word-wrap: break-word;">
                                <p style="line-height: 140%;"><span style="color: #f6f3ec !important; line-height: 14px; text-decoration: none !important;"><span style="box-sizing: border-box; margin: 0px; padding: 0px; border-width: 0px; font-stretch: inherit; line-height: 14px; font-optical-sizing: inherit; font-kerning: inherit; font-feature-settings: inherit; font-variation-settings: inherit; vertical-align: baseline; white-space: normal; color: #f6f3ec !important; text-decoration: none !important;">©</span> 2023 <a href="https://mityushina.ru/" style="text-decoration: none !important; color: #f6f3ec !important;">mityushina.ru</a>. </span><span style="color: #f6f3ec; line-height: 14px;">Все права защищены</span></p>
                            </div>
                                </td>
                                </tr>
                            </tbody>
                            </table>
                            <!--[if (!mso)&(!IE)]><!-->
                        </div>
                        <!--<![endif]-->
                        </div>
                    </div>
                    <!--[if (mso)|(IE)]></td><![endif]-->
                    <!--[if (mso)|(IE)]><td align="center" width="300" class="v-col-padding" style="background-color: #494646;width: 300px;padding: 30px 0px 10px 20px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                    <div id="u_column_9" class="u-col u-col-50" style="max-width: 320px;min-width: 300px;display: table-cell;vertical-align: top;">
                        <div style="background-color: #494646;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                        <!--[if (!mso)&(!IE)]><!-->
                        <div class="v-col-padding" style="box-sizing: border-box; height: 100%; padding: 20px 0px 20px 20px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                            <!--<![endif]-->
                            <table id="u_content_social_2" style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                            <tbody>
                                <tr>
                                <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:5px 0px 0px;font-family:'Open Sans',sans-serif;" align="left">
                                    <div align="left">
                                    <div style="display: table; max-width:300px;">
                                        <!--[if (mso)|(IE)]><table width="83" cellpadding="0" cellspacing="0" border="0"><tr><td style="border-collapse:collapse;" align="left"><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; mso-table-lspace: 0pt;mso-table-rspace: 0pt; width:83px;"><tr><![endif]-->
                                        <table align="left" border="0" cellspacing="0" cellpadding="0" height="15" style="width: 120px !important;height: 15px !important;display: inline-block;border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right: 0px">
                                        <tbody>
                                            <tr style="vertical-align: top">
                                            <td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                                                <a href="" style="font-size:11px; color: #f6f3ec !important; margin-right: 15px; text-decoration: none !important;">nm@mityushina.ru</a>
                                            </td>
                                            </tr>
                                        </tbody>
                                        </table>
                                        <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 10px;" valign="top"><![endif]-->
                                        <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="width: 32px !important;height: 32px !important;display: inline-block;border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right: 10px">
                                        <tbody>
                                            <tr style="vertical-align: top">
                                            <td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                                                <a href="https://instagram.com/mityushina_natalia?igshid=MzRlODBiNWFlZA==" title="Instagram" target="_blank">
                                                <img src="https://mityushina.ru/email/instIcon.png" alt="Instagram" title="Instagram" width="25" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                                </a>
                                            </td>
                                            </tr>
                                        </tbody>
                                        </table>
                                        <!--[if (mso)|(IE)]></td><![endif]-->
                                        <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 0px;" valign="top"><![endif]-->
                                        <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="width: 32px !important;height: 32px !important;display: inline-block;border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right: 0px">
                                        <tbody>
                                            <tr style="vertical-align: top">
                                            <td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                                                <a href="https://t.me/mityushina_natalia" title="Telegram" target="_blank">
                                                <img src="https://mityushina.ru/email/tgIcon.png" alt="Telegram" title="Telegram" width="25" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                                </a>
                                            </td>
                                            </tr>
                                        </tbody>
                                        </table>
                                        <!--[if (mso)|(IE)]></td><![endif]-->
                                        <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                                    </div>
                                    </div>
                                </td>
                                </tr>
                            </tbody>
                            </table>
                            <!--[if (!mso)&(!IE)]><!-->
                        </div>
                        <!--<![endif]-->
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
            </td>
        </tr>
        </tbody>
    </table>
    <!--[if mso]></div><![endif]-->
    <!--[if IE]></div><![endif]-->
    </body>
    </html>
    `
    
    const message = {
        html: html
    }

    try {
        const response = await axios.post('/api/sendEmail', {
            destination: destination,
            subject: subject,
            text: text,
            message
        })
    } catch (error) {
        console.error(error)
    }
}

export default sendEmail
