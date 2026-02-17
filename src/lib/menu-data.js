export const categories = [
  { id: "broasted", name: "المشاوي والبروستد", icon: "🍗" },
  { id: "traditional", name: "الزرب والأوزي", icon: "🥘" },
  { id: "meals", name: "الوجبات", icon: "🍛" },
  { id: "shawarma", name: "الشاورما", icon: "🥙" },
  { id: "appetizers", name: "المقبلات والسلطات", icon: "🥗" },
  { id: "extras", name: "الإضافات", icon: "🍟" },
  { id: "desserts", name: "الحلويات والمشروبات", icon: "🍰" },
]

export const menuItems = {
  broasted: [
    {
      id: 1,
      name: "4 قطع بروستد",
      description: "4 قطع دجاج بروستد مقرمشة",
      price: 3.75,
      image: "/images/broasted.jpg",
    },
    {
      id: 2,
      name: "8 قطع بروستد",
      description: "8 قطع دجاج بروستد مقرمشة",
      price: 6.95,
      image: "/images/crispy-pieces.jpg",
      popular: true,
    },
    {
      id: 3,
      name: "12 قطعة بروستد",
      description: "12 قطعة دجاج بروستد مقرمشة",
      price: 9.95,
      image: "/images/broasted.jpg",
    },
    {
      id: 4,
      name: "16 قطعة بروستد",
      description: "16 قطعة دجاج بروستد مقرمشة",
      price: 12.90,
      image: "/images/crispy-pieces.jpg",
    },
    {
      id: 5,
      name: "24 قطعة بروستد",
      description: "24 قطعة دجاج بروستد مقرمشة - عائلي",
      price: 18.90,
      image: "/images/broasted.jpg",
      popular: true,
    },
    {
      id: 6,
      name: "25 قطعة كرسبي",
      description: "25 قطعة دجاج كرسبي",
      price: 13.95,
      image: "/images/crispy-pieces.jpg",
    },
    {
      id: 7,
      name: "50 قطعة كرسبي",
      description: "50 قطعة دجاج كرسبي - حفلات",
      price: 15.00,
      image: "/images/broasted.jpg",
    },
  ],
  traditional: [
    {
      id: 8,
      name: "زرب لحم",
      description: "لحم مطبوخ على الحطب بالطريقة التقليدية مع الأرز",
      price: null,
      priceText: "يحدد عند الطلب",
      image: "/images/zarb.jpg",
      popular: true,
    },
    {
      id: 9,
      name: "زرب دجاج",
      description: "دجاج مطبوخ على الحطب بالطريقة التقليدية مع الأرز",
      price: null,
      priceText: "يحدد عند الطلب",
      image: "/images/chicken-rice.jpg",
    },
    {
      id: 10,
      name: "أوزي",
      description: "أرز بالبهارات مع اللحم ملفوف بالعجين",
      price: null,
      priceText: "يحدد عند الطلب",
      image: "/images/ouzi.jpg",
      popular: true,
    },
    {
      id: 11,
      name: "قدرة",
      description: "أرز بالزعفران مع اللحم والحمص",
      price: null,
      priceText: "يحدد عند الطلب",
      image: "/images/qedra.jpg",
    },
    {
      id: 12,
      name: "كبسة",
      description: "أرز كبسة بالبهارات مع الدجاج أو اللحم",
      price: null,
      priceText: "يحدد عند الطلب",
      image: "/images/kabsa.jpg",
    },
  ],
  meals: [
    {
      id: 13,
      name: "وجبة منسف لحمة",
      description: "قطعة لحمة 250 غم - لبن منسف 500 غم - شراك أرز 500 غم - مخلل 50 غم",
      price: 5.00,
      image: "/images/mansaf.jpg",
      popular: true,
    },
    {
      id: 14,
      name: "وجبة منسف دجاج",
      description: "نصف دجاجة - أرز 500 غم - مخلل 50 غم - شراك",
      price: 4.00,
      image: "/images/mansaf-chicken.jpg",
    },
    {
      id: 15,
      name: "وجبة نصف دجاجة",
      description: "نصف دجاجة - أرز 500 غم - لبن بخيار 200 غم",
      price: 3.75,
      image: "/images/half-chicken.jpg",
    },
    {
      id: 16,
      name: "سدر دجاجة",
      description: "دجاجة كاملة - أرز - 1 لبن بخيار - 1 صوص",
      price: 7.00,
      image: "/images/chicken-rice.jpg",
      popular: true,
    },
    {
      id: 17,
      name: "سدر دجاجة ونصف",
      description: "دجاجة ونصف - أرز - 2 لبن بخيار - 1 صوص",
      price: 10.00,
      image: "/images/chicken-rice.jpg",
    },
    {
      id: 18,
      name: "سدر دجاجتين",
      description: "دجاجتين - أرز - 2 لبن بخيار - 2 صوص",
      price: 13.00,
      image: "/images/chicken-rice.jpg",
    },
    {
      id: 19,
      name: "سدر ثلاث دجاجات",
      description: "ثلاث دجاجات - أرز - 3 لبن بخيار - 3 صوص",
      price: 20.00,
      image: "/images/chicken-rice.jpg",
      popular: true,
    },
    {
      id: 20,
      name: "سدر 2 كيلو لحم",
      description: "2 كيلو لحم - أرز - لبن منسف - شراك",
      price: 25.00,
      image: "/images/mansaf.jpg",
    },
  ],
  shawarma: [
    {
      id: 21,
      name: "شاورما عادي",
      description: "ساندويش شاورما دجاج عادي",
      price: 0.60,
      image: "/images/shawarma.jpg",
    },
    {
      id: 22,
      name: "شاورما سوبر",
      description: "ساندويش شاورما دجاج حجم كبير",
      price: 0.85,
      image: "/images/shawarma.jpg",
      popular: true,
    },
    {
      id: 23,
      name: "شاورما ديلوكس",
      description: "ساندويش شاورما مميزة",
      price: 1.25,
      image: "/images/shawarma.jpg",
    },
    {
      id: 24,
      name: "عرض شاورما التوفير",
      description: "5 ساندويش سوبر + كولسلو + بيبسي + مخلل",
      price: 4.20,
      image: "/images/shawarma-deal.jpg",
      popular: true,
      offer: true,
    },
    {
      id: 25,
      name: "عرض شاورما العائلية",
      description: "7 ساندويش سوبر + كولسلو + بيبسي + مخلل",
      price: 5.95,
      image: "/images/shawarma-deal.jpg",
      offer: true,
    },
  ],
  appetizers: [
    {
      id: 26,
      name: "سلطة عربية",
      description: "خضار طازجة مقطعة مع الليمون وزيت الزيتون",
      price: 0.50,
      image: "/images/salad.jpg",
    },
    {
      id: 27,
      name: "تبولة",
      description: "بقدونس وبرغل وطماطم مع الليمون",
      price: 0.50,
      image: "/images/salad.jpg",
    },
    {
      id: 28,
      name: "حمص",
      description: "حمص مطحون مع الطحينة وزيت الزيتون",
      price: 0.50,
      image: "/images/hummus.jpg",
      popular: true,
    },
    {
      id: 29,
      name: "متبل",
      description: "باذنجان مشوي مع الطحينة",
      price: 0.50,
      image: "/images/hummus.jpg",
    },
    {
      id: 30,
      name: "بابا غنوج",
      description: "باذنجان مشوي مع البهارات",
      price: 0.50,
      image: "/images/hummus.jpg",
    },
    {
      id: 31,
      name: "ورق عنب",
      description: "ورق عنب محشي بالأرز واللحم",
      price: 0.75,
      image: "/images/grape-leaves.jpg",
      popular: true,
    },
    {
      id: 32,
      name: "كولسلو",
      description: "سلطة ملفوف طازجة",
      price: 0.50,
      image: "/images/salad.jpg",
    },
  ],
  extras: [
    {
      id: 33,
      name: "بطاطا 200 غم",
      description: "بطاطا مقلية مقرمشة",
      price: 1.00,
      image: "/images/fries.jpg",
    },
    {
      id: 34,
      name: "بطاطا كبير 400 غم",
      description: "بطاطا مقلية حجم كبير",
      price: 1.50,
      image: "/images/fries.jpg",
      popular: true,
    },
    {
      id: 35,
      name: "أرز 500 غم",
      description: "أرز أبيض بالبهارات",
      price: 1.50,
      image: "/images/chicken-rice.jpg",
    },
    {
      id: 36,
      name: "مخلل 50 غم",
      description: "مخلل مشكل",
      price: 0.50,
      image: "/images/salad.jpg",
    },
    {
      id: 37,
      name: "لبن بخيار 250 غم",
      description: "لبن بخيار طازج",
      price: 0.50,
      image: "/images/salad.jpg",
    },
  ],
  desserts: [
    {
      id: 38,
      name: "حلويات كنافة",
      description: "حلويات شرقية طازجة",
      price: null,
      priceText: "حسب النوع",
      image: "/images/dessert.jpg",
      popular: true,
    },
    {
      id: 39,
      name: "مياه معدنية",
      description: "مياه معدنية 500 مل",
      price: 0.50,
      image: "/images/drinks.jpg",
    },
    {
      id: 40,
      name: "بيبسي",
      description: "بيبسي باردة",
      price: 0.50,
      image: "/images/drinks.jpg",
    },
  ],
}

export const contactInfo = {
  address: "حي نزال - شارع الدستور، مقابل مخازن غيتة",
  phones: ["06 4200261", "0797 111 655", "0786 300 341", "0792 86 86 60", "0788 11 11 30"],
  delivery: "توصيل مجاني للمنطقة",
}
