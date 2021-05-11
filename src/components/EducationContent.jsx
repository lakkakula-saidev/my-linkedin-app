import ExpEduCard from "./ExpEduCard"

const EducationContent = (props) => {
  return (
    <>
      <ExpEduCard
        img="https://i.pinimg.com/originals/16/d8/22/16d82265ca7d68de7b4efafee14fb14b.png"
        jobOrSchool="University of Blabla"
        companyOrSubject="5 year course of stuff"
        duration="Nov 2018 - May 2019 • 7 mos"
        location="Cape Town, Western Cape, South Africa"
      />
      <ExpEduCard
        img="https://educationlogo.files.wordpress.com/2018/09/educationlogo1.jpg?w=640"
        jobOrSchool="High School of Fishing"
        companyOrSubject="Learn to fish here"
        duration="Nov 2016 - May 2018 • 14 mos"
        location="Springfield, Illinois, USA"
      />
      <ExpEduCard
        img="https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2020/01/9-Best-School-Logos-and-How-to-Make-Your-Own-for-Free-image7.png"
        jobOrSchool="Superschool"
        companyOrSubject="Normal High School"
        duration="Nov 2011 - May 2015 • 24 mos"
        location="New York City, NY, USA"
      />
    </>
  )
}

export default EducationContent
