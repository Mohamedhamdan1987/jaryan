# جريان - لخدمات الصرف الصحي بالدمام

Landing page محسنة للأرشفة على محركات البحث (SEO-Optimized)

## المميزات

✅ تصميم responsive يعمل على جميع الأجهزة
✅ محسن للأرشفة على جوجل (SEO)
✅ سريع جداً (بدون frameworks ثقيلة)
✅ دعم كامل للغة العربية مع RTL
✅ Structured Data للظهور في نتائج البحث المحسنة
✅ Meta tags شاملة (Open Graph, Twitter Cards)
✅ Sitemap.xml و robots.txt

## البنية

```
jaryan/
├── index.html          # الصفحة الرئيسية
├── css/
│   └── style.css      # ملف التنسيقات
├── js/
│   └── main.js        # ملف JavaScript
├── images/            # مجلد الصور (يجب إضافة الصور)
├── sitemap.xml        # خريطة الموقع
├── robots.txt         # ملف توجيه محركات البحث
└── manifest.json      # Web App Manifest

```

## الصور المطلوبة

يجب إضافة الصور التالية في مجلد `images/`:

- `hero.webp` - صورة خلفية القسم الرئيسي
- `drain.webp` - خدمة تسليك المجاري
- `vacuum.webp` - خدمة شفط البيارات
- `clean.webp` - خدمة التنظيف والتعقيم
- `coolage1.jpg` - مقال 1
- `coolage2.jpg` - مقال 2
- `coolage3.jpg` - مقال 3
- `warning_signs.webp` - مقال 4
- `methods_comparison.webp` - مقال 5
- `prevention_tips.webp` - مقال 6
- `logo.png` - شعار الشركة
- `favicon.png` - أيقونة الموقع

يمكنك نسخ الصور من مشروع Flutter الأصلي.

## كيفية الاستخدام

1. **للتطوير المحلي:**
   - افتح ملف `index.html` مباشرة في المتصفح
   - أو استخدم Live Server في VS Code

2. **للنشر:**
   - ارفع جميع الملفات على الاستضافة
   - تأكد من رفع مجلد `images` مع جميع الصور
   - قم بتحديث الروابط في ملف `sitemap.xml` بالدومين الفعلي

## تحسينات SEO المطبقة

### On-Page SEO
- Title tag وصفي وغني بالكلمات المفتاحية
- Meta description جذابة
- استخدام Semantic HTML5
- Heading hierarchy صحيحة (H1, H2, H3)
- Alt text لجميع الصور
- Internal linking
- Mobile-friendly design
- Fast loading speed

### Technical SEO
- Structured Data (JSON-LD) للأعمال المحلية
- Sitemap.xml
- Robots.txt
- Canonical URL
- Language tags
- Open Graph tags
- Twitter Card tags

### Local SEO
- معلومات العمل المحلي
- رقم الهاتف قابل للنقر
- روابط WhatsApp مباشرة
- الموقع الجغرافي (الدمام)

## التخصيص

لتخصيص المحتوى:

1. **تغيير المعلومات:**
   - افتح `index.html`
   - عدل النصوص والأرقام حسب الحاجة

2. **تغيير الألوان:**
   - افتح `css/style.css`
   - عدل المتغيرات في `:root`

3. **إضافة/تعديل المقالات:**
   - عدل array `articles` في `js/main.js`
   - أضف/عدل الكروت في `index.html`

## المتصفحات المدعومة

- Chrome (آخر إصدارين)
- Firefox (آخر إصدارين)
- Safari (آخر إصدارين)
- Edge (آخر إصدارين)
- جميع المتصفحات الحديثة على الموبايل

## الترخيص

جميع الحقوق محفوظة © 2026 جريان لخدمات الصرف الصحي
