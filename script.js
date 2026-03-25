const CC = {
  'ٹیکنالوجی': 'tech',
  'طرزِ زندگی': 'life',
  'کاروبار': 'biz',
  'سفر': 'travel'
};

let editId = null;
let curCat = 'all';
let curQ = '';

let posts = [
  {
    id: 1,
    title: 'مصنوعی ذہانت کا مستقبل: پاکستان میں امکانات',
    cat: 'ٹیکنالوجی',
    excerpt: 'مصنوعی ذہانت نے دنیا بدل دی ہے۔ پاکستان میں بھی اے آئی کے مواقع تیزی سے بڑھ رہے ہیں اور نئی نسلیں اس میدان میں آگے بڑھ رہی ہیں۔',
    content: '<p>مصنوعی ذہانت آج کے دور کی سب سے بڑی انقلابی ٹیکنالوجی ہے۔ پاکستان میں بھی اے آئی کے مواقع تیزی سے بڑھ رہے ہیں۔</p><p><strong>کیا پاکستان تیار ہے؟</strong> ہمارے نوجوان باذہن ہیں اور سٹیم تعلیم میں اضافہ ہو رہا ہے۔ لاہور، کراچی اور اسلام آباد میں کئی اے آئی سٹارٹ اپس اپنا کام شروع کر چکے ہیں۔</p><ul><li>صحت کے شعبے میں اے آئی معاون تشخیص</li><li>زراعت میں سمارٹ آب پاشی نظام</li><li>ای کامرس اور کسٹمر سروس آٹومیشن</li></ul><p><em>امید ہے کہ اگلے پانچ سالوں میں پاکستان اے آئی برآمدات میں نیا مقام حاصل کرے گا۔</em></p>',
    author: 'راشد محمود',
    date: '۱۷ مارچ ۲۰۲۶',
    comments: [
      { name: 'عائشہ کے', text: 'بہت اچھی پوسٹ ہے! مجھے امید ہے کہ پاکستان اس دوڑ میں پیچھے نہیں رہے گا۔', date: '۱۷ مارچ' },
      { name: 'زبیر علی', text: 'اے آئی صحت کے شعبے میں واقعی کام کر سکتی ہے۔ آپ کا تجزیہ درست ہے۔', date: '۱۷ مارچ' }
    ]
  },
  {
    id: 2,
    title: 'لاہور کا اسٹریٹ فوڈ: ایک لذیذ سفر',
    cat: 'سفر',
    excerpt: 'لاہور کی گلیاں خوشبو سے بھری ہیں — نہاری، پائے، اور دہی بھلے۔ ایک فوڈ لور کا سفر نامہ جو آپ کا دل جیت لے گا۔',
    content: '<p>لاہور صرف ایک شہر نہیں، یہ ایک احساس ہے۔ اور اس شہر کا دل دھڑکتا ہے اس کے اسٹریٹ فوڈ میں۔</p><p><strong>ہیرا منڈی سے ڈیٹا دربار تک</strong> — ہر موڑ پر لذیذ چیز ملتی ہے۔ انڈہ چنا، دہی بھلے، اور رات کے دو بجے کی نہاری — یہ سب لاہور کی پہچان ہیں۔</p><p><em>میرا مشورہ: صبح انارکلی بازار سے شروع کریں اور رات کو گوالمنڈی فوڈ اسٹریٹ پر ختم کریں۔</em></p>',
    author: 'ثنا بلوچ',
    date: '۱۶ مارچ ۲۰۲۶',
    comments: [
      { name: 'حسن آر', text: 'گوالمنڈی فوڈ اسٹریٹ سچ میں لاجواب ہے! حاجی صاحب کی نہاری تو زبردست ہے۔', date: '۱۶ مارچ' }
    ]
  },
  {
    id: 3,
    title: 'ریموٹ ورک: گھر سے کامیاب کاروبار',
    cat: 'کاروبار',
    excerpt: 'کووڈ کے بعد ریموٹ ورک ایک نئی حقیقت بن گیا۔ پاکستانی فری لانسرز اب دنیا کے لیے کام کر رہے ہیں اور خوب کمائی کر رہے ہیں۔',
    content: '<p>ریموٹ ورک نے کام کی دنیا کو پلٹ دیا ہے۔ پاکستان میں لاکھوں فری لانسرز اب گھر بیٹھے ڈالر کما رہے ہیں۔</p><p><strong>کیسے شروع کریں؟</strong> اپ ورک، فائیور اور لنکڈ اِن پر پروفائل بنائیں۔ اپنی مہارت کو پہچانیں۔</p><ul><li>مستحکم انٹرنیٹ کنیکشن ضروری ہے</li><li>مخصوص کام کی جگہ بنائیں</li><li>کلائنٹ سے رابطے میں پیشہ ورانہ رویہ رکھیں</li></ul>',
    author: 'کامران شیخ',
    date: '۱۵ مارچ ۲۰۲۶',
    comments: []
  },
  {
    id: 4,
    title: 'صحت مند زندگی کے پانچ سنہرے اصول',
    cat: 'طرزِ زندگی',
    excerpt: 'آج کے مصروف دور میں صحت مند رہنا مشکل لگتا ہے۔ لیکن یہ پانچ چھوٹی عادات آپ کی پوری زندگی بدل سکتی ہیں۔',
    content: '<p>صحت صرف جسم کی نہیں، ذہن کی بھی ہوتی ہے۔ آج ہم بات کرتے ہیں پانچ ایسی عادات کی جو آپ کی زندگی بدل سکتی ہیں۔</p><p><strong>۱۔ صبح کی سیر:</strong> روزانہ تیس منٹ کی واک بلڈ پریشر اور موڈ دونوں ٹھیک رکھتی ہے۔</p><p><strong>۲۔ پانی پینا:</strong> دن میں آٹھ گلاس پانی لازمی ہے۔</p><p><strong>۳۔ اسکرین ٹائم:</strong> سونے سے ایک گھنٹہ پہلے فون بند کریں۔</p>',
    author: 'ڈاکٹر فریدہ ناز',
    date: '۱۴ مارچ ۲۰۲۶',
    comments: [
      { name: 'بلال ایم', text: 'بہت مفید ٹپس ہیں! صبح کی سیر والی بات بالکل سچ ہے۔', date: '۱۵ مارچ' },
      { name: 'نادیہ ایس', text: 'اسکرین ٹائم والا نکتہ تو مجھ پر بالکل فٹ بیٹھا!', date: '۱۵ مارچ' }
    ]
  }
];

/* ── UTILITIES ── */
function showView(v) {
  document.querySelectorAll('.view').forEach(e => e.classList.remove('active'));
  document.getElementById('view-' + v).classList.add('active');
}

function filterCat(cat, el) {
  curCat = cat;
  document.querySelectorAll('.cpill').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  if (el) el.classList.add('active');
  renderHome();
  showView('home');
}

function doSearch(v) {
  curQ = v;
  renderHome();
}

function ini(n) {
  return n.split(' ').map(w => w[0]).join('').slice(0, 2);
}

/* ── RENDER HOME ── */
function renderHome() {
  const el = document.getElementById('home-content');
  const f = posts.filter(p => {
    const mc = curCat === 'all' || p.cat === curCat;
    const q = curQ.toLowerCase();
    return mc && (!q || p.title.includes(curQ) || p.excerpt.includes(curQ) || p.author.includes(curQ));
  });

  if (!f.length) {
    el.innerHTML = '<div class="no-res">کوئی مضمون نہیں ملا...</div>';
    return;
  }

  let html = '';

  if (f.length === 1) {
    html = `<div class="featured-layout" style="grid-template-columns:1fr"><div class="feat-hero" onclick="openPost(${f[0].id})">${heroInner(f[0])}</div></div>`;
  } else if (f.length === 2) {
    html = `<div class="featured-layout"><div class="feat-hero" onclick="openPost(${f[0].id})">${heroInner(f[0])}</div><div class="feat-sidebar"><div class="feat-card" onclick="openPost(${f[1].id})">${sideInner(f[1])}</div></div></div>`;
  } else {
    const side = f.slice(1, 3);
    const grid = f.slice(3);
    html = `<div class="featured-layout">
      <div class="feat-hero" onclick="openPost(${f[0].id})">${heroInner(f[0])}</div>
      <div class="feat-sidebar">${side.map(p => `<div class="feat-card" onclick="openPost(${p.id})">${sideInner(p)}</div>`).join('')}</div>
    </div>`;
    if (grid.length) {
      html += `<div class="section-head"><span>مزید مضامین</span><hr></div>
        <div class="grid-row">${grid.map(p => `
          <div class="grid-card ${CC[p.cat]}" onclick="openPost(${p.id})">
            <span class="post-tag ${CC[p.cat]}">${p.cat}</span>
            <h3>${p.title}</h3>
            <p class="excerpt">${p.excerpt.substring(0, 95)}...</p>
            <div class="meta">
              <span class="av">${ini(p.author)}</span>
              <span>${p.author}</span>
              <span class="ccount">&#128172; ${p.comments.length}</span>
            </div>
          </div>`).join('')}
        </div>`;
    }
  }

  el.innerHTML = html;
}

function heroInner(p) {
  return `
    <span class="post-tag ${CC[p.cat]}">${p.cat}</span>
    <h2>${p.title}</h2>
    <p class="excerpt">${p.excerpt}</p>
    <div class="meta">
      <span class="av">${ini(p.author)}</span>
      <span>${p.author}</span>
      <span>&#183;</span>
      <span>${p.date}</span>
      <span style="margin-right:auto">&#128172; ${p.comments.length}</span>
    </div>`;
}

function sideInner(p) {
  return `
    <span class="post-tag ${CC[p.cat]}">${p.cat}</span>
    <h3>${p.title}</h3>
    <p class="excerpt">${p.excerpt.substring(0, 85)}...</p>
    <div class="meta">${p.author} &#183; &#128172; ${p.comments.length}</div>`;
}

/* ── POST PAGE ── */
function openPost(id) {
  const p = posts.find(x => x.id === id);
  document.getElementById('post-detail').innerHTML = `
    <div style="margin-bottom:0.5rem"><span class="post-tag ${CC[p.cat]}">${p.cat}</span></div>
    <div class="post-page-title">${p.title}</div>
    <div class="post-byline">
      <span class="av" style="width:32px;height:32px;font-size:0.75rem">${ini(p.author)}</span>
      <div>
        <div class="byline-name">${p.author}</div>
        <div class="byline-date">${p.date}</div>
      </div>
      <button class="edit-btn" onclick="openEditor(${p.id})">&#9998; ترمیم کریں</button>
    </div>
    <div class="post-body">${p.content}</div>`;
  renderComments(id);
  showView('post');
}

/* ── COMMENTS ── */
function renderComments(id) {
  const p = posts.find(x => x.id === id);
  const sec = document.getElementById('comments-section');
  sec.innerHTML =
    `<div class="comments-title">تبصرے <span>${p.comments.length}</span></div>` +
    (p.comments.length
      ? p.comments.map(c => `
          <div class="comment-item">
            <div class="c-author">
              <span class="av">${ini(c.name)}</span>
              <span class="c-name">${c.name}</span>
              <span class="c-date">&#183; ${c.date}</span>
            </div>
            <div class="c-text">${c.text}</div>
          </div>`).join('')
      : '<p class="no-comments">ابھی کوئی تبصرہ نہیں — پہلے آپ لکھیں!</p>') +
    `<div class="cf">
      <div class="cf-title">اپنا تبصرہ لکھیں</div>
      <input type="text" id="c-name" placeholder="آپ کا نام">
      <textarea id="c-text" placeholder="یہاں لکھیں..."></textarea>
      <button class="btn-comment" onclick="addC(${id})">بھیجیں &#8594;</button>
    </div>`;
}

function addC(id) {
  const n = document.getElementById('c-name').value.trim();
  const t = document.getElementById('c-text').value.trim();
  if (!n || !t) { alert('نام اور تبصرہ دونوں ضروری ہیں!'); return; }
  posts.find(x => x.id === id).comments.push({ name: n, text: t, date: 'ابھی' });
  renderComments(id);
}

/* ── EDITOR ── */
function openEditor(id) {
  editId = id;
  const eh = document.getElementById('ed-h');
  if (id) {
    const p = posts.find(x => x.id === id);
    eh.innerHTML = 'پوسٹ ترمیم کریں <span>ترمیم</span>';
    document.getElementById('f-title').value = p.title;
    document.getElementById('f-cat').value = p.cat;
    document.getElementById('f-excerpt').value = p.excerpt;
    document.getElementById('f-author').value = p.author;
    document.getElementById('rte').innerHTML = p.content;
  } else {
    eh.innerHTML = 'نیا مضمون <span>مسودہ</span>';
    ['f-title', 'f-excerpt', 'f-author'].forEach(i => document.getElementById(i).value = '');
    document.getElementById('f-cat').value = 'ٹیکنالوجی';
    document.getElementById('rte').innerHTML = '';
  }
  showView('editor');
}

function rf(cmd) {
  document.getElementById('rte').focus();
  document.execCommand(cmd, false, null);
}

function rfb(tag) {
  document.getElementById('rte').focus();
  document.execCommand('formatBlock', false, tag);
}

function savePost() {
  const title   = document.getElementById('f-title').value.trim();
  const cat     = document.getElementById('f-cat').value;
  const excerpt = document.getElementById('f-excerpt').value.trim();
  const author  = document.getElementById('f-author').value.trim();
  const content = document.getElementById('rte').innerHTML.trim();

  if (!title || !excerpt || !author || !content.replace(/<[^>]+>/g, '').trim()) {
    alert('تمام خانے پُر کریں!');
    return;
  }

  if (editId) {
    Object.assign(posts.find(x => x.id === editId), { title, cat, excerpt, author, content });
    openPost(editId);
  } else {
    posts.unshift({
      id: Date.now(), title, cat, excerpt, author, content,
      date: '۱۷ مارچ ۲۰۲۶', comments: []
    });
    renderHome();
    showView('home');
  }
}

/* ── INIT ── */
renderHome();
