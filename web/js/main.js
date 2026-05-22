/* ── Tab switching ── */
function showTab(id) {
  document.querySelectorAll('.tab-page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.mobile-nav-btn').forEach(b => b.classList.remove('active'));

  const page = document.getElementById('page-' + id);
  const btn  = document.getElementById('tab-btn-' + id);
  if (page) page.classList.add('active');
  if (btn)  btn.classList.add('active');

  // sync mobile nav
  const mBtns = document.querySelectorAll('.mobile-nav-btn');
  const tabOrder = ['home','research','publications','teaching','courses','collaboration','contact'];
  const idx = tabOrder.indexOf(id);
  if (mBtns[idx]) mBtns[idx].classList.add('active');

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ── Mobile menu ── */
function toggleMobile() {
  document.getElementById('mobileNav').classList.toggle('open');
}

/* ── Publications data ── */
const PUBS = [
  { title:"Microfinance, financial inclusion and ICT: Implications for poverty and inequality", authors:"R Mushtaq, C Bruneau", journal:"Technology in Society, 59, 101154", year:2019, cites:623, cat:"finance" },
  { title:"Impact of Islamic work ethics on organizational citizenship behaviors and knowledge-sharing behaviors", authors:"G Murtaza, M Abbas, U Raja, O Roques, A Khalid, R Mushtaq", journal:"Journal of Business Ethics, 133(2), 325–333", year:2016, cites:439, cat:"csr" },
  { title:"ICT adoption, innovation, and SMEs' access to finance", authors:"R Mushtaq, AA Gull, M Usman", journal:"Telecommunications Policy, 46(3), 102275", year:2022, cites:147, cat:"finance" },
  { title:"The power of the CEO and environmental decoupling", authors:"AA Gull, N Hussain, SA Khan, R Mushtaq, R Orij", journal:"Business Strategy and the Environment, 2023", year:2023, cites:120, cat:"governance" },
  { title:"Revisiting the association between environmental performance and financial performance", authors:"AA Gull, A Saeed, MT Suleman, R Mushtaq", journal:"Corporate Social Responsibility and Environmental Management, 29(5), 1647–1662", year:2022, cites:112, cat:"csr" },
  { title:"CEO power and corporate social responsibility decoupling", authors:"Y Shahab, AA Gull, T Ahsan, R Mushtaq", journal:"Applied Economics Letters, 29(21), 1965–1969", year:2022, cites:101, cat:"governance" },
  { title:"Financial literacy, confidence and well-being: The mediating role of financial behavior", authors:"M Sajid, R Mushtaq, G Murtaza, D Yahiaoui, V Pereira", journal:"Journal of Business Research, 182, 114791", year:2024, cites:95, cat:"finance" },
  { title:"Do financial performance indicators predict 10-K text sentiments? An application of artificial intelligence", authors:"R Mushtaq, AA Gull, Y Shahab, I Derouiche", journal:"Research in International Business and Finance, 61, 101679", year:2022, cites:33, cat:"ai" },
  { title:"Sustainability committee and environmental decoupling: International evidence", authors:"AA Gull, AAA Sarang, R Mushtaq, T Ahsan", journal:"Corporate Social Responsibility and Environmental Management, 31(2), 1268–1287", year:2024, cites:32, cat:"csr" },
  { title:"Striving to safeguard shareholders or maintain sustainability in periods of high uncertainty: A multi-country evidence", authors:"AA Gull, T Ahsan, MA Qureshi, R Mushtaq", journal:"Technological Forecasting and Social Change, 188, 122183", year:2023, cites:19, cat:"governance" },
  { title:"COVID-19 adaptive strategy and SMEs' access to finance", authors:"AA Gull, R Mushtaq, DK Nguyen, PT Tran", journal:"Applied Economics, 56(22), 2615–2628", year:2024, cites:16, cat:"finance" },
  { title:"Impact of globalisation, remittances and human capital on environmental quality: Evidence from landlocked African countries", authors:"CEW Yameogo, R Mushtaq, MW Zafar, SAH Zaidi, MAS Al-Faryan", journal:"International Journal of Finance & Economics, 29(3), 3469–3486", year:2024, cites:12, cat:"csr" },
  { title:"The walking dead: are Zombie firms environmentally and socially responsible? A global perspective", authors:"AI Mashwani, R Mushtaq, AA Gull, AA Rind", journal:"Journal of Environmental Management, 355, 120499", year:2024, cites:11, cat:"csr" },
  { title:"The impact of liquidity conditions on the time-varying link between US municipal green bonds and major risky markets during the COVID-19 crisis: A machine learning approach", authors:"B Kocaarslan, R Mushtaq", journal:"Energy Policy, 184, 113911", year:2024, cites:11, cat:"ai" },
  { title:"International portfolio diversification: United States and south Asian equity markets", authors:"R Mushtaq, SZA Shah", journal:"Panoeconomicus, 61(2), 241–252", year:2014, cites:9, cat:"ai" },
  { title:"Are born global firms environmentally more responsible? Evidence from the East Asia and Pacific region", authors:"R Mushtaq, G Murtaza, D Yahiaoui, P Vijay, QA Talpur", journal:"Asia Pacific Journal of Management, 42(2), 1061–1093", year:2025, cites:6, cat:"csr" },
  { title:"Stock price crash and information environment: Do CEO gender and financial expertise matter?", authors:"AA Gull, A Abid, DK Nguyen, M Usman, R Mushtaq", journal:"Review of Quantitative Finance and Accounting, 65(1), 219–255", year:2025, cites:4, cat:"governance" },
  { title:"Does financial inclusion affect economic growth? A global perspective", authors:"M Khizar, ZUR Rao, MZ Tauni, R Mushtaq", journal:"International Journal of Business Competition and Growth, 8(1-2), 78–111", year:2022, cites:1, cat:"finance" },
  { title:"Gender-diverse boards and related party transactions: What makes the difference?", authors:"AA Gull, I Derouiche, R Mushtaq", journal:"Revue Française de Gouvernance d'Entreprise, 2023", year:2023, cites:0, cat:"governance" },
];

const CAT_BADGE = {
  governance: '<span style="background:#dbeafe;color:#1d4ed8;padding:2px 9px;border-radius:20px;font-size:.7rem;font-weight:600;">Corporate Governance</span>',
  csr:        '<span style="background:#d1fae5;color:#065f46;padding:2px 9px;border-radius:20px;font-size:.7rem;font-weight:600;">CSR &amp; Sustainability</span>',
  finance:    '<span style="background:#fef3c7;color:#92400e;padding:2px 9px;border-radius:20px;font-size:.7rem;font-weight:600;">Financial Inclusion</span>',
  ai:         '<span style="background:#ede9fe;color:#5b21b6;padding:2px 9px;border-radius:20px;font-size:.7rem;font-weight:600;">AI &amp; Markets</span>',
};

function renderPubs(filter) {
  const list = document.getElementById('pubList');
  if (!list) return;
  const data = filter === 'all' ? PUBS : PUBS.filter(p => p.cat === filter);
  list.innerHTML = data.map(p => `
    <div class="pub-card">
      <div style="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:flex-start;gap:8px;margin-bottom:8px;">
        <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;">
          ${CAT_BADGE[p.cat]}
          <span style="font-size:.72rem;color:#9ca3af;">${p.year}</span>
        </div>
        <span class="pub-cite">${p.cites > 0 ? p.cites + ' citations' : 'New'}</span>
      </div>
      <h3 style="font-size:.9rem;font-weight:600;margin-bottom:5px;line-height:1.45;color:#111827;">${p.title}</h3>
      <p style="font-size:.78rem;color:#6b7280;margin-bottom:3px;">${p.authors}</p>
      <p style="font-size:.75rem;color:#9ca3af;font-style:italic;">${p.journal}</p>
    </div>
  `).join('');
}

function filterPubs(btn, filter) {
  document.querySelectorAll('.filter-pill').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderPubs(filter);
}

/* ── Contact form ── */
function handleForm(e) {
  e.preventDefault();
  const el = document.getElementById('formSuccess');
  if (el) { el.classList.remove('hidden'); e.target.reset(); setTimeout(() => el.classList.add('hidden'), 5000); }
}

/* ── Init ── */
document.addEventListener('DOMContentLoaded', () => {
  renderPubs('all');
});
