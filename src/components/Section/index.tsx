import Link from 'next/link';
import Image from 'next/image';

interface Props {
  className: string;
  active: string;
  handleMouseEnter: (id: string) => void;
  handleMouseLeave: () => void;
  urlTo: string;
  countryLabel: string;
  countryId: string;
  buttonText: string;
}

export default function Section({
  className,
  active,
  handleMouseEnter,
  handleMouseLeave,
  urlTo,
  countryLabel,
  countryId,
  buttonText,
}: Props): JSX.Element {
  return (
    <section
      className={className}
      onMouseEnter={() => handleMouseEnter(countryId)}
      onMouseLeave={() => handleMouseLeave()}
    >
      <div
        className={`content ${
          active !== countryId && active !== '' ? 'unactive' : null
        }`}
      >
        <Image
          layout="fixed"
          width="134"
          height="50"
          src="https://static.wixstatic.com/media/7acf0b_4c9560a517ba4ef285ce8827cafff07e~mv2.png/v1/fill/w_134,h_50,al_c,usm_0.66_1.00_0.01,enc_auto/7acf0b_4c9560a517ba4ef285ce8827cafff07e~mv2.png"
          className="logo"
          alt={countryLabel}
        />
        <Link href={urlTo} passHref>
          <a href="#" className="btn">
            {buttonText}
          </a>
        </Link>
      </div>
    </section>
  );
}
