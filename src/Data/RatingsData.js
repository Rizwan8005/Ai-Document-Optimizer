import { Rate } from "antd";
import Rating from "../assets/icons/ratings-img.svg";
import User1 from '../assets/images/user1.png'
import User2 from '../assets/images/user2.png'
import User3 from '../assets/images/user3.png'

export const ratings_data = [
  {
    id: 1,
    title:
      "Great solution for PDF docs with very little pre-knowledge required.",
    desc: '"Simplicity, familiarity with the menu and user-friendly. Its easy to navigate, make changes and edit whatever you may need. Because its used alongside Google, the document is always saved, so you dont have to worry about it."',
    ratings: <Rate allowHalf defaultValue={2.5} />,
    ratings_img: Rating,
    user_img: User1,
    user_name: "Pam Driscoll F",
    user_profession: "Teacher",
  },
  {
    id: 2,
    title: "A Valuable Document Signer for Small Businesses.",
    desc: '"I love that DocHub is incredibly affordable and customizable. It truly does everything I need it to do, without a large price tag like some of its more well known competitors."',
    ratings: <Rate allowHalf defaultValue={2.5} />,
    ratings_img: Rating,
    user_img: User2,
    user_name: "Jiovany A",
    user_profession: "Small-Business",
  },
  {
    id: 3,
    title:
      "I can create refillable copies for the templates that I select and then I can publish those.",
    desc: '"I like to work and organize my work in the appropriate way to meet and even exceed the demands that are made daily in the office, so I enjoy working with PDF files, I think they are more professional and versatile, they allow..."',
    ratings: <Rate allowHalf defaultValue={2.5} />,
    ratings_img: Rating,
    user_img: User3,
    user_name: "Victoria G",
    user_profession: "Small-Business",
  },
];
