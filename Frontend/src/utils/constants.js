const presentYear = new Date().getFullYear();



export const inputs = [
    {name:"title", label:"Başlık", type:"text", placeholder:"Film başlığını girin"},
    {name:"description", label:"Açıklama", type:"text", placeholder:"Film açıklamasını girin"},
    {name:"rating", label:"Puan", type:"number", placeholder:"Film puanını girin (0-10 arasında)",min:1, max:10, step:0.1},
    {name:"year", label:"Yıl", type:"number", placeholder:"Film yılını girin", min:1900, max:presentYear},
    {name:"director", label:"Yönetmen", type:"text", placeholder:"Yönetmen adını girin"},
    {name:"duration", label:"Süre (dakika)", type:"number", placeholder:"Film süresini girin"},
    {name:"cast", label:"Oyuncular (, ile ayırınız)", type:"text", placeholder:"Başrol oyuncularını girin"},
    {name:"genre", label:"Tür (, ile ayırınız)", type:"text", placeholder:"Film türünü girin"},
    {name:"language", label:"Dil", type:"text", placeholder:"Film dilini girin"},
]