// Problem:1  radianToDegree
// ফাংশন নেম দিতে হবে radianToDegree । এই ফাংশনে প্যারামিটার হিসেবে নিবে রেডিয়ান (radian)। তারপর সেটাকে ডিগ্রীতে (degree) কনভার্ট করে কত ডিগ্রী (degree) হয় সেই সংখ্যা রিটার্ন করবে। রিটার্ন করার সময় তোমাকে দশমিক এর পর দুই ঘর রিটার্ন করতে হবে।

/* Solution 1: */

function radianToDegree(radian) {
    // let π = 3.14159;
    // let degree = radian * (180 / π);
    let degree = radian * (180 / Math.PI);
    return degree.toFixed(2);
}

// let angleConverter = radianToDegree(3);
// console.log(angleConverter);

/*******************************************************************/

// Problem:2  isJavaScriptFile 

// ফাংশন নেম দিতে হবে isJavaScriptFile । এই ফাংশনে প্যারামিটার হিসেবে নিবে একটি স্ট্রিং(String) যেটি হবে একটি ফাইল নেম (যেমনঃ ‘index.js’)। যদি এটি জাভাস্ক্রিপ্ট ফাইল হয় তোমাকে true রিটার্ন করতে হবে আর যদি না হয় তাহলে false রিটার্ন করতে হবে । 

/* Solution 2: */

function isJavaScriptFile(string) {
    if (string.endsWith('.js')) { return true; }
    else { return false; };
}
//  let fileName = isJavaScriptFile('ami.js')
//  console.log(fileName);

/*******************************************************************/

// Problem 3: oilPrice

// ফাংশন নেম দিতে হবে oilPrice। এই ফাংশন তিনটা প্যারামিটার নিবে। 

// ভিডিও ভালো করে দেখবে। 

// প্রতি লিটার ডিজেলের এর দাম – 114 টাকা

// প্রতি লিটার পেট্রোল এর দাম – 130 টাকা 

// প্রতি লিটার অকটেনের এর দাম – 135 টাকা 

// এখন সে যদি বিভিন্ন লিটারের ডিজেল,পেট্রোল,অকটেনের অর্ডার দেয় তাহলে টোটাল কত টাকা খরচ হবে হলো সেই সংখ্যা রিটার্ন করতে হবে। 

/* Solution 3: */
function oilPrice(diselQuantity, petrolQuantity, octenQuantity) {
    const diselPricePerLiter = 114;
    const petrolPricePerLiter = 130;
    const octenPricePerLiter = 135;

    let diselTotalPrice = diselPricePerLiter * diselQuantity;
    let petrolTotalPrice = petrolPricePerLiter * petrolQuantity;
    let octenTotalPrice = octenPricePerLiter * octenQuantity;

    let totalPrice = diselTotalPrice + petrolTotalPrice + octenTotalPrice;

    return totalPrice;
}

// let totalCost = oilPrice(0,2,3);
// console.log(totalCost);


/*******************************************************************/

// Problem 4: publicBusFare

// একটি বড় সংখ্যাক মানুষজন পিকনিকে যাবে। বাসের সংখ্যা মানুষের সংখার উপর নির্ভর করবে। ধরো আমাদের বাস ও মাইক্রো আছে ।প্রতিটি বাসের ক্যাপাসিটি ৫০ জন এবং প্রতিটি মাইক্রবাসের ক্যাপাসিটি ১১ জন এবং পাবলিক বাসের প্রতিটি টিকেটের মূল্য ২৫০ টাকা করে। এখন তোমাকে একটি ফাংশন লিখতে হবে যার নাম হবে publicBusFare যেটি প্যরামিটার হিসেবে একটা সংখ্যা (কতজন যাবে )  নিবে । মোট কতটাকা পাবলিক বাস ফেয়ারে যাবে সেটি তোমাকে রিটার্ন করবে । 

/* Solution 4: */

function publicBusFare(number) {
    const busCapacity = 50;
    const microbusCapacity = 11;
    const publicBusTicketPrice = 250;


    if (number >= busCapacity) {
        let busNeeded = number / busCapacity;
        Math.floor(busNeeded);
        let remaining = (number % busCapacity);
        let microbusNeeded = remaining / microbusCapacity;
        Math.floor(microbusNeeded);
        let reminder = remaining % microbusCapacity;
        let totalPublicbusFare = reminder * publicBusTicketPrice;
        return totalPublicbusFare;
    }

    else if (number >= microbusCapacity) {
        let microbusNeeded = number / microbusCapacity;
        Math.floor(microbusNeeded);
        let remaining = (number % microbusCapacity);
        let totalPublicbusFare = remaining * publicBusTicketPrice;
        return totalPublicbusFare;
    }

    else { return totalPublicbusFare = number * publicBusTicketPrice }
}

// let passenger = publicBusFare(49);
// console.log(passenger);


/*******************************************************************/

// Problem 5: isBestFriend

// তোমাকে একটি ফাংশন লিখতে হবে isBestFriend যেটি প্যরামিটার হিসেবে দুইটি অবজেক্ট নিবে । তোমাকে অবজেক্ট দুইটি নিয়ে দেখতে হবে এরা দুইজন একে অপরের বেস্টফ্রেন্ড কিনা । যদি বেস্ট ফ্রেন্ড হয় তাহলে true রিটার্ন করবে , না হলে false রিটার্ন করবে ।