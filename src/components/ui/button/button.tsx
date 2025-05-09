interface IButtonProps {
  children: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
  onClick?: () => void;
}

const Button = (props: IButtonProps) => {
  const { children, type = 'button', ...attrs } = props;

  return (
    <button className='button' type={type} {...attrs}>
      {children}
    </button>
  );
};

export default Button;
