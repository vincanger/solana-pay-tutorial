import { useRef, useState, useEffect} from "react";
import { useRouter } from "next/router";
import { products } from "../lib/products"
import NumberInput from "./NumberInput";

interface Props {
  submitTarget: string;
  publicKey?: boolean;
}

export default function Products({ submitTarget, publicKey }: Props) {
  const formRef = useRef<HTMLFormElement>(null);
  const [name, setName] = useState('');
  const [counter, setCounter] = useState({});
  const [enableButton, setEnableButton] = useState(false);

  const router = useRouter();

  const setObject = (newObj: Object) => {
    setCounter({...counter, ...newObj})
  }

  useEffect(() => {
    console.log('counter: ', counter);
    const isTrue = Object.values(counter).some(n => n)
    console.log('is true: ', isTrue)
    checkEnabledButton(isTrue)
  }, [counter])
 
  const checkEnabledButton = (bool: boolean) => {
    if (publicKey) {
      console.log('useWallet present')
      setEnableButton(publicKey && bool);
    } else if (router.route.includes('/shop')) {
      console.log('useWallet NOT present')
      setEnableButton(bool);
    }
  }

  return (
    <form method='get' action={submitTarget} ref={formRef}>
      <div className='flex flex-col gap-8'>
        <div className="grid grid-cols-3 gap-8">
          {products.map(product => {
            return (

              <div className="rounded-md bg-white text-left p-8" key={product.id}>
                <h3 className="text-2xl font-bold">{product.name}</h3>
                <p className="text-sm text-gray-800">{product.description}</p>
                <p className="my-4">
                  <span className="mt-4 text-xl font-bold">${product.priceUsd}</span>
                  {product.unitName && <span className="text-sm text-gray-800"> /{product.unitName}</span>}
                </p>
                <div className="mt-1">
                  <NumberInput 
                    name={product.id} 
                    formRef={formRef} 
                    addNumber={setObject}
                    />
                </div>
              </div>

            )
          })}

        </div>
        <input type="text" name="turtle" value={name} onChange={e => setName(String(e.target.value))} />


        <button
          className="items-center px-20 rounded-md py-2 max-w-fit self-center bg-gray-900 text-white hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!enableButton}
        >
          Checkout
        </button>
      </div>
    </form>
  )
}
