import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
    
    lng: 'en',
    resources:{
        pashto: {
            translation:{
            "logo": "د شریفی لیسی زده کری مرکز",
            "title": "ژوند ښکلی دی، که ته په بل ډول فکر وکړې.",
            "desc":"ژوند د هستۍ، ودې او تجربې یوه پیچلې لړۍ ده چې د زیږون او مرګ ترمنځ واټن نښلوي. دا ژوند بیولوژیکي پروسې، شخصي اړیکې او د معنا لپاره دوامداره لټون په غیږ کې نیسي."
            }
        },
        en:{
            translation: {
                "logo": "Sharifi Center",
                "title": "Life is beautiful, if you think differently",
                "desc": "Life is a complex journey of existence, growth, and experience bridging birth and death. It spans biological processes, personal connections, and a constant search for meaning."
            }
        },
        fa: {
            translation:{
                "logo": "مرکز آموزشی استاد شریفی",
                "title": "زندگی میتواند بسیار زیبا و ساده شود اگر تو متفاوت فکر کنی",
                "desc": "زندگی یک مسیر پیچیده و زیباست و معمولا برای انسان با درد و رنج همراه است. و من فکر می کنم زیبایی زندگی در تحمل رنج ها و سختی های آن  است"
            }
        },
        
    }
});

export default i18n;
