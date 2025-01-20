function Frame() {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2861.076847907292!2d12.206843276837585!3d44.18488341788045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132ca577e4082b4b%3A0xbadbd7f11cab7f29!2sSport%20Center!5e0!3m2!1str!2str!4v1735942437973!5m2!1str!2str"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
}

export default Frame;
