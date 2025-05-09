interface IButtonProps {
  children: string;
  type?: 'button' | 'submit';
}

const Button = (props: IButtonProps) => {
  const { children, type = 'button' } = props;

  return (
    <button className='button' type={type}>
      {children}
    </button>
  );
};

export default Button;
