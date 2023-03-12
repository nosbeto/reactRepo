export default function LinkedInBadge() {
  return (
    <div className="container">
      <div
        class="badge-base LI-profile-badge"
        data-locale="en_US"
        data-size="large"
        data-theme="dark"
        data-type="HORIZONTAL"
        data-vanity="dearmasalberto"
        data-version="v1"
      >
        <a
          className="badge-base__link LI-simple-link"
          href="https://www.linkedin.com/in/dearmasalberto?trk=profile-badge"
        >
          Alberto De Armas
        </a>
      </div>
      <script
        src="https://platform.linkedin.com/badges/js/profile.js"
        async
        defer
        type="text/javascript"
      ></script>
    </div>
  );
}
