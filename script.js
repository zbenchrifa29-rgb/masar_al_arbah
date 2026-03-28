// محرك ApexNexus الموزون - سرعة متوسطة وزيادة متغيرة
let count =547;
const counterElement = document.getElementById('visitor-count');

function runTrustCounter() {
    // 1. زيادة متغيرة (1 أو 2 أو 3) لكسر الرتابة
    const variableIncrements = [1, 2, 3, 1, 3]; 
    const randomInc = variableIncrements[Math.floor(Math.random() * variableIncrements.length)];
    
    count += randomInc;
    
    // 2. تحديث الرقم
    if(counterElement) {
        counterElement.innerText = count.toLocaleString();
    }

    // 3. أوقات الانتظار بعد خصم نصف ثانية (500ms) من كل قيمة:
    // (3.5ث، 5.5ث، 6.5ث، 9.5ث)
    const tunedDelays = [3500, 5500, 6547, 9500];
    const randomDelay = tunedDelays[Math.floor(Math.random() * tunedDelays.length)];
    
    setTimeout(runTrustCounter, randomDelay);
}

// انطلاق المحرك
runTrustCounter();
