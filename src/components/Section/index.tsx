import Link from 'next/link';

interface Props {
  className: string;
  active: string;
  handleMouseEnter: (id: string) => void;
  handleMouseLeave: () => void;
  image: string;
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
  image,
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
      <div className={`content ${active !== countryId ? 'unactive' : null}`}>
        <img src={image} />
        <h1>{countryLabel}</h1>
        <Link href={urlTo} passHref>
          <a href="#" className="btn">
            {buttonText}
          </a>
        </Link>
      </div>
    </section>
  );
}
