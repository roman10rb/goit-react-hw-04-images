import { Oval } from "react-loader-spinner";
import css from './Loader.module.css'
export default function Loader() {
    
    
    return (<div className={css.Loader}>
        <Oval
      height={60}
  width={60}
  color="blue"
  visible={true}
  ariaLabel='oval-loading'
  secondaryColor="grey"
  strokeWidth='3'
  strokeWidthSecondary={2}
    />
    </div>) 
}