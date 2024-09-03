import i18n from "i18next";
import { initReactI18next } from "react-i18next";


const resources = {
  en: {
    translation: {
      "Welcome to React": "Home",
      Services: "Services",
      "About Us": "About Us",
      Partners: "Partners",
      Contact: "Contact",
      "Sorry, the page you are looking for does not exist.": "Sorry, the page you are looking for does not exist.",
      "Go to Home": "Go to Home",
      Company: "Company",
      "Leading the industry with innovative tech solutions and exceptional service.": "Leading the industry with innovative tech solutions and exceptional service.",
      "Offering web development, app creation, SEO, consulting, and more.": "Offering web development, app creation, SEO, consulting, and more.",
      "Connect with us on social media for updates and news.": "Connect with us on social media for updates and news.",
      "Your Company": "Your Company",
      "All rights reserved.": "All rights reserved.",
      "Phone Numbers": "Phone Numbers",
      "Business Hours": "Business Hours",
      "Social Media": "Social Media",
      "888-333-111": "888-333-111",
      "24/7": "24/7",
      "Email": "Email",
      "Phone": "Phone",
      "Address": "Address",
      "Destination Location": "Destination Location",
      "Footer Text": "This is the footer section of the website.",
      "Contact Us": "Contact Us",
      "Follow Us": "Follow Us",
      "Get in touch with us through our contact form or social media.": "Get in touch with us through our contact form or social media.",
      "We look forward to hearing from you!": "We look forward to hearing from you!",
      "Send Message": "Send Message",
      "Your Name": "Your Name",
      "Your Email": "Your Email",
      "Your Message": "Your Message",
      "Submit": "Submit",
      "Filters": {
        "All": "All",
        "IT": "IT",
        "Building": "Building"
      }
    },
  },
  ge: {
    translation: {
      "Welcome to React": "მთავარი",
      Services: "სერვისები",
      "About Us": "ჩვენ შესახებ",
      Partners: "პარტნიორები",
      Contact: "კონტაქტი",
      "Sorry, the page you are looking for does not exist.": "ბოდიშით, გვერდი, რომელსაც ეძებთ, არ არსებობს.",
      "Go to Home": "მთავარ გვერდზე გადაყვანა",
      Company: "კომპანია",
      "Leading the industry with innovative tech solutions and exceptional service.": "ინდუსტრიის ლიდერი ინოვაციური ტექნოლოგიური გადაწყვეტილებებითა და გამოჩენილი მომსახურებით.",
      "Offering web development, app creation, SEO, consulting, and more.": "ვაწვდეთ ვებსაიტების განვითარების, აპლიკაციების შექმნის, SEO-ს, კონსულტაციების და სხვა მომსახურებას.",
      "Connect with us on social media for updates and news.": "წარმოადგინეთ ჩვენს სოციალურ ქსელებზე სიახლეებისა და სიახლეებისათვის.",
      "Your Company": "თქვენი კომპანია",
      "All rights reserved.": "ყველა უფლებები დაცულია.",
      "Phone Numbers": "ტელეფონის ნომრები",
      "Business Hours": "სამუშაო საათები",
      "Social Media": "სოციალური ქსელები",
      "888-333-111": "888-333-111",
      "24/7": "24/7",
      "Email": "ელ. ფოსტა",
      "Phone": "ტელეფონი",
      "Address": "მისამართი",
      "Destination Location": "სამიზნე ადგილია",
      "Footer Text": "ეს არის ვებსაიტის ფეხსაცმლის ნაწილი.",
      "Contact Us": "დაგვიკავშირდით",
      "Follow Us": "გვაახლეთ",
      "Get in touch with us through our contact form or social media.": "დაგვიკავშირდით ჩვენს საკონტაქტო ფორმას ან სოციალური ქსელების მეშვეობით.",
      "We look forward to hearing from you!": "გვსურს გაგვიგო თქვენგან!",
      "Send Message": "შეტყობინების გაგზავნა",
      "Your Name": "თქვენი სახელი",
      "Your Email": "თქვენი ელ. ფოსტა",
      "Your Message": "თქვენი შეტყობინება",
      "Submit": "გაგზავნა",
      "Filters": {
        "All": "ყველა",
        "IT": "IT",
        "Building": "მშენებლობა"
      }
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
