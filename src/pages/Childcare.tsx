import "../assets/css files/childcare.css";

interface Props {
  onSelectageGroup: (ageGroup: string) => void;
  ageLists: List[];
}

interface List {
  id: number;
  ageGroup: string;
  Fresident: string;
  P2resident: string;
  P3resident: string;
  FnonResident: string;
  P2nonResident: string;
  P3nonResident: string;
}

const ChildCare = ({ onSelectageGroup, ageLists }: Props) => {
  return (
    <div>
      <h3 className="title teritary font-5 md:text-4xl text-2xl text-center ml-5 mb-5 mt-11">
        <span className="span-title">Welcome to McKenzie Towne Hall’s </span>
        Childcare Program!
      </h3>
      <p className="teritary font-2 md:text-xl text-lg text-left md:w-2/5 ml-5 mb-5">
        The purpose of our program is to help families living in the community
        of McKenzie Towne and in the neighborhood communities by offering
        quality child care for children between 19 months and 5 years old.{" "}
      </p>
      <p className="teritary font-2 md:text-xl text-lg text-left md:w-2/5 ml-5 mb-5">
        We are a licensed childcare, approved by the Alberta Government. Our
        dedicated staff have Early Childhood Education credentials and valid
        First Aid certificates. The program is held within the McKenzie Towne
        Hall.
      </p>
      <p className="teritary font-2 md:text-xl text-lg text-left md:w-2/5 italic ml-5 mb-5">
        MTC Childcare hours are from 7:00 am to 6:00 pm, Monday to Friday.
      </p>

      <h3 className="title teritary font-1 md:text-4xl text-2xl text-center ml-5 mb-5">
        <span className="span-title">MTC Childcare</span> monthly fees
      </h3>

      <section className="plans">
        {/* <!-- types of plans container --> */}

        <div className="Childcare">
          <div>
            <select
              className="ageGroupSelection"
              onChange={(event) => onSelectageGroup(event.target.value)}
            >
              <option className="ageGroupOption" value="No Age Group selected">
                Please select age group
              </option>
              <option className="ageGroupOption" value="19 months - 2.4 years">
                19 months - 2.4 years
              </option>
              <option className="ageGroupOption" value="2.5 years - 5 years">
                {" "}
                2.5 years - 5 years
              </option>
            </select>
          </div>
        </div>
        <div className="types-of-plans">
          <div className="Childcare">
            <h3 className="title">Types of Enrollments</h3>
            <div className="enrollments text-left">
              <li>Full-Time</li>
              <li>Part-Time (3 days)</li>
              <li>Part-Time (2 days)</li>
            </div>
          </div>

          <div className="Childcare">
            <h3 className="title">Cost</h3>

            {ageLists?.map((ageList) => (
              <div key={ageList.id} className="childcareCost">
                <div>
                  <li>Resident:{ageList.Fresident}</li>
                  <li>Non-Resident:{ageList.FnonResident}</li>
                </div>
                <div>
                  <li>Resident:{ageList.P3resident}</li>
                  <li>Non-Resident:{ageList.P3nonResident}</li>
                </div>

                <div>
                  <li>Resident:{ageList.P2resident}</li>
                  <li>Non-Resident:{ageList.P2nonResident}</li>
                </div>
              </div>
            ))}
          </div>
        </div>

        <h1 className="teritary text-2xl mb-3 pb-6">
          Note:{" "}
          <span className="italic text-xl">
            A registration fee of $50 per child is required at the time of the
            enrollment. This fee will be directed to administrative and material
            use.
          </span>{" "}
        </h1>
      </section>

      <h3 className="title teritary font-1 md:text-4xl text-2xl text-center mt-10 ml-5 mb-10">
        <span className="span-title">MTC Childcare</span> includes
      </h3>
      <div className="teritary text-left ml-9 mb-3 text:lg md:text-xl flex flex-col gap-1">
        <li>
          A safe, nurturing and clean environment for children and their
          families
        </li>
        <li>
          Qualified caregivers who are committed to fostering growth and
          development in children
        </li>
        <li>
          Enjoyable and appropriate daily activities to each child’s
          developmental stage
        </li>
        <li>A low child-to-teacher ratio and small group sizes</li>
        <li>Open communication with the parents</li>
        <li>Respect</li>
        <li>Reliability</li>
        <li>Knowledgeability</li>
        <li>Daily access to our gymnasium and our outdoor play area</li>
      </div>

      <h3 className="title teritary font-1 text-3xl text-center mt-10 ml-5 mb-10">
        <span className="span-title">Some things to keep in</span> Mind
      </h3>
      <div className="teritary text-left ml-9 mb-3 text:lg md:text-xl flex flex-col gap-2">
        <li>
          We accept registration of families who receive subsidy for childcare.
          For this, parents need to provide MTC Childcare with an approval
          letter from the Government of Alberta stating the amount they have
          been approved for.
        </li>
        <li>
          MTC Childcare follows a “Bagged Lunch Policy” where parents prepare
          their child’s lunch and snacks from home and send them with the
          children.{" "}
        </li>
        <li>
          Enjoyable and appropriate daily activities to each child’s
          developmental stage
        </li>
        <li>
          MTC Childcare is a peanut-free program which requires parents to pack
          snacks and lunches that are peanut-free in order to protect those
          children who have allergies.
        </li>
      </div>
      <h3 className="teritary md:text-xl text-lg italic mt-12 backgroupInfromation">
        For more information about our childcare, please contact 403-781-6612
        ext. 2 or email: daycare@mtcouncil.com.
      </h3>
    </div>
  );
};

export default ChildCare;
