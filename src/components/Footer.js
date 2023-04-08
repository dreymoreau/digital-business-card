export default function Footer(){
    const Anchor = props => {
  return (
    <a {...props}>{ props.children }</a>
  );
}
    return(
        <section className="footer--items">
            <Anchor alt="link to github" href="https://www.github.com/dreymoreau" className="fa fa-github spacing" ></Anchor>  
            <Anchor alt="link to linkedin"  href="https://www.linkedin.com/in/dreymoreau" target="_blank" className="fa fa-linkedin spacing"></Anchor>  
    </section>
    )
}