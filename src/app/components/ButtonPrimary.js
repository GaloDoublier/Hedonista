const ButtonPrimary = ({text,className}) => {
  return (
    <button className={`z-10 px-6 py-2 text-white border-2 hover:bg-white hover:text-black text-lg font-secondary transition-all duration-500 ease-out ${className}`}>
          {text}
    </button>
  )
}

export default ButtonPrimary