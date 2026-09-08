import React from 'react';
import { User, Calendar, MapPin, Flag, Globe2, Sparkles, CheckCircle2 } from 'lucide-react';

export function About({ personal, sections, lang }) {
  const isAr = lang === 'ar';
  const isTr = lang === 'tr';

  return (
    <section id="about" className="section">
      <div className="section-header">
        <h2 className="section-title">
          <span className="gradient-text">{sections.aboutTitle}</span>
        </h2>
        <p className="section-subtitle">{sections.aboutSubtitle}</p>
      </div>

      <div className="carousel-grid">
        <div className="glass-card" style={{ padding: '24px' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-primary)' }}>
            <User size={20} />
            <span>{isAr ? 'المعلومات الشخصية والمهنية' : (isTr ? 'Kişisel ve Mesleki Bilgiler' : 'Personal & Professional Details')}</span>
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Calendar size={18} style={{ color: 'var(--accent-secondary)' }} />
              <strong style={{ minWidth: '110px' }}>{isAr ? 'تاريخ الميلاد:' : (isTr ? 'Doğum Tarihi:' : 'Date of Birth:')}</strong>
              <span style={{ color: 'var(--text-muted)' }}>01.2003</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Flag size={18} style={{ color: 'var(--accent-secondary)' }} />
              <strong style={{ minWidth: '110px' }}>{isAr ? 'الجنسية:' : (isTr ? 'Uyruk:' : 'Citizenship:')}</strong>
              <span style={{ color: 'var(--text-muted)' }}>{personal.citizenship}</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Globe2 size={18} style={{ color: 'var(--accent-secondary)' }} />
              <strong style={{ minWidth: '110px' }}>{isAr ? 'الإقامة الحالية:' : (isTr ? 'Konum:' : 'Location:')}</strong>
              <span style={{ color: 'var(--text-muted)' }}>{personal.location}</span>
            </div>
          </div>
        </div>

        <div className="glass-card" style={{ padding: '24px' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-primary)' }}>
            <Sparkles size={20} />
            <span>{isAr ? 'النقاط التنافسية البارزة' : (isTr ? 'Öne Çıkan Rekabetçi Yetkinlikler' : 'Key Competitive Strengths')}</span>
          </h3>

          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'var(--text-muted)' }}>
              <CheckCircle2 size={18} style={{ color: 'var(--accent-primary)', flexShrink: 0, marginTop: '3px' }} />
              <span><strong>{isAr ? 'تطوير الويب الكامل (Full Stack):' : (isTr ? 'Full Stack Web Geliştirme:' : 'Full Stack Web Development:')}</strong> {isAr ? 'بناء تطبيقات متكاملة وسريعة باستخدام React.js للـ Frontend و Node.js للـ Backend.' : (isTr ? 'React.js (Frontend) ve Node.js (Backend) ile uçtan uca hızlı web uygulamaları geliştirme.' : 'Engineering end-to-end applications using React.js for Frontend and Node.js for Backend.')}</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'var(--text-muted)' }}>
              <CheckCircle2 size={18} style={{ color: 'var(--accent-primary)', flexShrink: 0, marginTop: '3px' }} />
              <span><strong>{isAr ? 'أنظمة الـ ERP والـ .NET:' : (isTr ? 'ERP Sistemleri & .NET:' : 'ERP Systems & .NET:')}</strong> {isAr ? 'خبرة عملية في تطوير أنظمة إدارة المؤسسات، تصميم المعاملات وتكامل قواعد البيانات SQL.' : (isTr ? 'Kurumsal ERP yazılımı geliştirme, modül tasarımı ve SQL veritabanı entegrasyonu deneyimi.' : 'Hands-on development of ERP software, system modules, and SQL database integration.')}</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'var(--text-muted)' }}>
              <CheckCircle2 size={18} style={{ color: 'var(--accent-primary)', flexShrink: 0, marginTop: '3px' }} />
              <span><strong>{isAr ? 'تطوير الأعمال الإقليمي (B2B):' : (isTr ? 'Bölgesel İş Geliştirme (B2B):' : 'Regional Business Dev (B2B):')}</strong> {isAr ? 'مهارة ممتازة في إدارة المبيعات، التواصل مع العملاء الدوليين وعمل الشراكات في منطقة الشرق الأوسط وأفريقيا.' : (isTr ? 'MENA ve Afrika bölgelerinde B2B satış yönetimi, uluslararası müşteri ilişkileri ve pazar genişletme.' : 'Proven expertise in B2B sales management, international client relations, and market expansion across MENA & Africa.')}</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'var(--text-muted)' }}>
              <CheckCircle2 size={18} style={{ color: 'var(--accent-primary)', flexShrink: 0, marginTop: '3px' }} />
              <span><strong>{isAr ? 'تعدد اللغات والثقافات:' : (isTr ? 'Çok Dilli ve Çok Kültürlü:' : 'Multilingual & Multicultural:')}</strong> {isAr ? 'إتقان كامل للغة العربية (الأم)، والتركية (بمستوى احترافي طليق).' : (isTr ? 'Arapça (Anadili) ve Türkçe (İleri Düzey Akıcı) yetkinliği.' : 'Fluency in Arabic (Native) and Turkish (Professional Fluent).')}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
