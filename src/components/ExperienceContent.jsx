import ExpEduCard from "./ExpEduCard"

const ExperienceContent = (props) => {
  return (
    <>
      <ExpEduCard
        img="https://www.romeschools.org/wp-content/uploads/2014/10/MMI-Logo-Square.jpg"
        jobOrSchool="Sales"
        companyOrSubject="Yuppiechef Contract"
        duration="Nov 2018 - May 2019 • 7 mos"
        location="Cape Town, Western Cape, South Africa"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, temporibus provident. Sed temporibus."
      />
      <ExpEduCard
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJBpE70-nNw-nqJ6kOr4YTlWLISILApNcPwQ&usqp=CAU"
        jobOrSchool="Fisherman"
        companyOrSubject="Fishing co."
        duration="Nov 2016 - May 2018 • 14 mos"
        location="Springfield, Illinois, USA"
        description="Lorem ipsum dolor sit amet."
      />
      <ExpEduCard
        img="https://campoelettrico.it/287292-large_default/logo-square-150-plus-18w-4000k-gr-m-prisma-pri303194.jpg"
        jobOrSchool="Lawyer"
        companyOrSubject="Legal Counselling New York"
        duration="Nov 2011 - May 2015 • 24 mos"
        location="New York City, NY, USA"
        description="Lorem ipsum dolor sit amet consectetur adipisicing"
      />
    </>
  )
}

export default ExperienceContent
