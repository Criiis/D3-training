interface CompanyLogoProps {
  logo: string;
  name: string;
}
const CompanyLogo = ({ logo, name }: CompanyLogoProps) => {
  return (
    <div className="w-[35px] h-[35px] mr-2 rounded-lg bg-slate-300 dark:bg-slate-200">
      <img className="p-1 w-[35px] h-[35px] object-contain" src={logo} alt={name} />
    </div>
  );
};

export default CompanyLogo;
