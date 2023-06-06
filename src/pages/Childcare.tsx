import '../assets/css files/childcare.css'



export default function ChildCare() {
  return (
    <div>
      <h1 className="teritary display-5 font-1 mb-9 mt-10">Welcome to McKenzie Towne Hall’s Childcare Program! </h1>
      <p className='teritary font-2 text-xl text-left w-2/5 ml-5 mb-5'>The purpose of our program is to help families living in the community of McKenzie Towne and in the neighborhood communities by offering quality child care for children between 19 months and 5 years old. </p>
      <p className='teritary font-2 text-xl text-left w-2/5 ml-5 mb-5'>We are a licensed childcare, approved by the Alberta Government. Our dedicated staff have Early Childhood Education credentials and valid First Aid certificates. The program is held within the McKenzie Towne Hall.</p>
      <p className='teritary font-2 text-xl text-left w-2/5 ml-5 mb-5'>MTC Childcare hours are from 7:00 am to 6:00 pm, Monday to Friday.</p>
      <h3 className='title teritary font-1 text-3xl text-center ml-5 mb-5' ><span className='span-title'>MTC Childcare</span> monthly fees</h3>
      
      <section className='plans'>
      {/* <!-- types of plans container --> */}
				
					<div className="types-of-plans">
						
						<div className="option-1">
							<i className="fab fa-500px"></i>
							<h3 className="title">Age Groups</h3>
					<div className="age-group-1">
						<h1>19 months - 2.4 years</h1>
					</div>
						</div>
						<div className="option-1">
							<i className="fab fa-angellist"></i>
							<h3 className="title">Types of Enrollments</h3>
					<div className='age-1-enrollments text-left'>
						
						<li>Full-Time</li>
						<li>Part-Time (3 days)</li>
						<li>Part-Time (2 days)</li>
						
					</div>
						</div>
						<div className="option-1">
							<i className="fas fa-award"></i>
							<h3 className="title">Cost</h3>
					<div className='age-1-cost text-left'>
						<div className='option-1'>
						<li>Resident: $1125</li>
						<li>Non-Resident: $1175</li>
						</div>
<div>
						<li className='option-2'>Resident: $675</li>
						<li>Non-Resident: $705</li>
						</div>

<div>
						<li className='option-3'>Resident: $450</li>
						<li>Non-Resident: $470</li>
						</div>
					</div>
						</div>
					</div>

					{/* plan b */}
					
					
{/* first age group container */}
				<div className='agc-1-container grid grid-cols-3 items-center '>
				</div>
				{/* <!-- / End Single Service --> */}
				{/* <!-- Start Single Service --> */}
				<div>
					<div className="single-service">
						<div className="part-2">
							<p className="description">Express delivery inno service effective logistics solution for delivery of small cargo delivery service.</p>
							<a href="#"><i className="fas fa-arrow-circle-right"></i>Read More</a>
						</div>
					</div>
				</div>
        </section>
				{/* <!-- / End Single Service --> */}
      
    </div>
  );
}
