import onlinePayment from '../../public/media/documents/Online-Payments.pdf'
import AnnualFeePolicy from '../../public/media/documents/Annual-Fee-Policy.pdf'

export default function ResidentInfo() {
    return (
        <div className="residentContainer">
         <h3 className="title teritary font-5 md:text-4xl text-2xl text-center ml-5 mb-5 mt-11">
          <span className="span-title">Resident </span>Information
        </h3>

        <a href="https://central.ivrnet.com/mtc"><div className="boxShadow">Log In here</div></a>
        <div>
        <h3 className="title teritary font-5 md:text-4xl text-2xl text-center ml-5 mb-5 mt-11">
          <span className="span-title">Payments </span>
        </h3>
        </div>

<div>

        <div>
        <h3 className="teritary font-5 md:text-2xl text-xl text-left ml-5 mb-5 mt-11">
          <span className="span-title"></span>Make your online payment by choosing one of the options below:
        </h3>
        <ul className="teritary font-5 md:text-2xl text-xl text-left ml-5 mb-5 mt-6">
            <li>1. Log in to your account <span className="bg-black p-1 rounded-md fourth"><a href="https://central.ivrnet.com/mtc">Here</a></span> or</li>
            <li className='mt-2'>2. Click <span className="bg-black p-1 rounded-md fourth"><a href={onlinePayment}>Here</a></span> For a step by step walkthrough</li>
        </ul>
        </div>

        <div>
        <h3 className="teritary font-5 md:text-2xl text-xl text-left ml-5 mt-11">
          <span className="span-title"></span>If you have your Invoice number:
        </h3>
        <div className='teritary font-5 md:text-2xl text-xl text-left ml-10 mb-5 mt-4'>
        <li className='mt-2'>Locate the invoice number on the invoice that was mailed out on June 1st</li>
        <li className='mt-2'>Click <span className='bg-black p-1 rounded-md fourth'>here</span> and</li>
        <li className='mt-2'>Input the Invoice Number and Access Code into the fields available.</li>
</div>
        </div>

        <div>
        <h3 className="teritary font-5 md:text-2xl text-xl text-left ml-5 mt-11">
          <span className="span-title"></span>Email Transfer:
        </h3>
        <div className='teritary font-5 md:text-2xl text-xl text-left ml-10 mb-5 mt-4'>
        <li className='mt-2'>Send to acctn@mtcouncil.com</li>
        <li className='mt-2'>Ensure your invoice number is noted in the message field</li>
        <li className='mt-2 md:w-2/5'>Multiple properties -  Make one lump payment with a note of account number and property addresses. Receipts will come separately by email..</li>
</div>


        </div>
        <div>
        <h3 className="teritary font-5 md:text-2xl text-xl text-left ml-5 mt-11">
          <span className="span-title"></span>Bank Bill Pay:
        </h3>
        <div className='teritary font-5 md:text-2xl text-xl text-left ml-10 mb-5 mt-4'>
        <li className='mt-2'>Add McKenzie Towne Council to your payees</li>
        <li className='mt-2'>Account number: use the number found beside your name on the invoice as your account number.</li>
        
</div>

        </div>
<div className='md:w-3/5 m-auto mb-4'>
<h3 className="teritary font-5 md:text-2xl text-xl text-center ml-5 mt-11">
          <span className="span-title"></span>Annual fees are payable from June 1st and are due by June 30th of each year. Interest will accrue in the amount of Prime + 5% per annum beginning August 1st. Unpaid accounts will be sent to the collection agency/lawyer.
        </h3>
</div>
</div>

<div>
<h3 className="title teritary font-5 md:text-4xl text-2xl text-center ml-5 mb-5 mt-11">
          <span className="span-title">Annual Fee Policy </span>
        </h3>
        <h3 className="teritary font-2 md:text-3xl text-2xl text-center mb-5 mt-11">
          {" "}
          Click{" "}
          <a href={AnnualFeePolicy}>
            {" "}
            <span className="hover:text-white text-blue-500">here</span>{" "}
          </a>{" "}
          to see our Policy on Annual Fee Collection.
        </h3>
</div>

        </div>
    )
}