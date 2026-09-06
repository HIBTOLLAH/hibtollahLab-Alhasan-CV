import React, { useState } from 'react';
import { X, Mail, Phone, MapPin, Copy, Check, Send, Github } from 'lucide-react';

export function ContactModal({ isOpen, onClose, personal, lang }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [sentMessage, setSentMessage] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isAr = lang === 'ar';
  const isTr = lang === 'tr';

  if (!isOpen) return null;

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${personal.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          _subject: `تواصل جديد عبر السيرة الذاتية من ${formData.name}`,
          Name: formData.name,
          Email: formData.email,
          Message: formData.message
        })
      });

      if (response.ok) {
        setSentMessage(true);
        setTimeout(() => {
          setSentMessage(false);
          setFormData({ name: '', email: '', message: '' });
          onClose();
        }, 3500);
      } else {
        // Fallback to mailto link
        window.location.href = `mailto:${personal.email}?subject=${encodeURIComponent("تواصل جديد عبر السيرة الذاتية - " + formData.name)}&body=${encodeURIComponent(formData.message + "\n\nمن: " + formData.name + " (" + formData.email + ")")}`;
        setSentMessage(true);
      }
    } catch (err) {
      // Fallback
      window.location.href = `mailto:${personal.email}?subject=${encodeURIComponent("تواصل جديد عبر السيرة الذاتية - " + formData.name)}&body=${encodeURIComponent(formData.message + "\n\nمن: " + formData.name + " (" + formData.email + ")")}`;
      setSentMessage(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="glass-card modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <X size={20} />
        </button>

        <h2 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '8px' }}>
          {isAr ? <>تواصل مع <span className="gradient-text">{personal.name}</span></> : (isTr ? <><span className="gradient-text">{personal.name}</span> ile İletişime Geçin</> : <>Get in Touch with <span className="gradient-text">{personal.name}</span></>)}
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '24px' }}>
          {isAr ? 'سيصلك رد مباشر على بريدك الإلكتروني عند إرسال هذه الرسالة.' : (isTr ? 'Mesajınız doğrudan e-posta adresime iletilecektir.' : 'Your message will be sent directly to my email address.')}
        </p>

        {/* Quick Action Copy Buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', background: 'var(--bg-secondary)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem' }}>
              <Mail size={18} style={{ color: 'var(--accent-primary)' }} />
              <span>{personal.email}</span>
            </div>
            <button className="btn btn-secondary" onClick={() => copyToClipboard(personal.email, 'email')} style={{ padding: '6px 12px', fontSize: '0.8rem' }}>
              {copiedEmail ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
              <span>{copiedEmail ? (isAr ? 'تم النسخ' : (isTr ? 'Kopyalandı' : 'Copied')) : (isAr ? 'نسخ' : (isTr ? 'Kopyala' : 'Copy'))}</span>
            </button>
          </div>

          {personal.phone && (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', background: 'var(--bg-secondary)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem' }}>
                <Phone size={18} style={{ color: 'var(--accent-teal)' }} />
                <span dir="ltr">{personal.phone}</span>
              </div>
              <button className="btn btn-secondary" onClick={() => copyToClipboard(personal.phone, 'phone')} style={{ padding: '6px 12px', fontSize: '0.8rem' }}>
                {copiedPhone ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
                <span>{copiedPhone ? (isAr ? 'تم النسخ' : (isTr ? 'Kopyalandı' : 'Copied')) : (isAr ? 'نسخ' : (isTr ? 'Kopyala' : 'Copy'))}</span>
              </button>
            </div>
          )}
        </div>

        {/* Contact Form */}
        {sentMessage ? (
          <div style={{ textAlign: 'center', padding: '24px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: 'var(--radius-sm)', border: '1px solid #10b981' }}>
            <Check size={32} color="#10b981" style={{ margin: '0 auto 10px auto' }} />
            <h4 style={{ color: '#10b981', fontWeight: '700' }}>{isAr ? 'تم إرسال رسالتك إلى البريد بنجاح!' : (isTr ? 'Mesajınız e-postama başarıyla gönderildi!' : 'Your message has been sent to email!')}</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '4px' }}>{isAr ? `سيصل إشعار بالرسالة مباشرة إلى ${personal.email}` : (isTr ? `${personal.email} adresine iletildi.` : `Notification sent to ${personal.email}`)}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div>
              <input 
                type="text" 
                placeholder={isAr ? 'الاسم' : (isTr ? 'Adınız Soyadınız' : 'Your Name')} 
                required 
                value={formData.name} 
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                style={{ width: '100%', padding: '10px 14px', borderRadius: 'var(--radius-sm)', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', color: 'var(--text-main)', fontSize: '0.9rem' }}
              />
            </div>
            <div>
              <input 
                type="email" 
                placeholder={isAr ? 'البريد الإلكتروني' : (isTr ? 'E-posta Adresiniz' : 'Your Email Address')} 
                required 
                value={formData.email} 
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                style={{ width: '100%', padding: '10px 14px', borderRadius: 'var(--radius-sm)', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', color: 'var(--text-main)', fontSize: '0.9rem' }}
              />
            </div>
            <div>
              <textarea 
                rows="4" 
                placeholder={isAr ? 'الرسالة' : (isTr ? 'Mesajınız...' : 'Your Message...')} 
                required 
                value={formData.message} 
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                style={{ width: '100%', padding: '10px 14px', borderRadius: 'var(--radius-sm)', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', color: 'var(--text-main)', fontSize: '0.9rem', resize: 'vertical' }}
              />
            </div>

            <button type="submit" className="btn btn-primary" disabled={isSubmitting} style={{ width: '100%', justifyContent: 'center', opacity: isSubmitting ? 0.7 : 1 }}>
              <Send size={16} />
              <span>{isSubmitting ? (isAr ? 'جاري الإرسال...' : (isTr ? 'Gönderiliyor...' : 'Sending...')) : (isAr ? 'إرسال إلى الإيميل' : (isTr ? 'E-postaya Gönder' : 'Send to Email'))}</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
