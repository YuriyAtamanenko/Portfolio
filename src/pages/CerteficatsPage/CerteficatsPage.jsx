import { Iframe, CertificateWrapper } from './CerteficatsPage.styled';

export default function Certificate() {
  return (
    <CertificateWrapper>
      <Iframe
        title="Certificate"
        src="https://drive.google.com/file/d/15LqkgVrTaIlDTQ4fGch5l0b2ouriVmiF/preview"
        width="640"
        height="480"
        allow="autoplay"
      ></Iframe>
    </CertificateWrapper>
  );
}
