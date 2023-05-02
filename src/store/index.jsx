import { createGlobalState } from "react-hooks-global-state";
import step1 from "../assets/steps2.svg"
import step2 from "../assets/steps1.svg"
import step3 from "../assets/steps4.svg"
import step4 from "../assets/steps3.svg"
import solution1 from "../assets/Vector (1).svg"
import solution2 from "../assets/Vector (2).svg"
import solution3 from "../assets/Vector (3).svg"
import solution4 from "../assets/Vector (4).svg"
import solution5 from "../assets/Vector (5).svg"

const { setGlobalState, useGlobalState, getGlobalState } = createGlobalState(
  {
    about :[
        {
            id: 1,
            text: "Zero onboarding fee",
        },
        {
            id: 2,
            text: "Seamless payment collection",
        },
        {
            id: 3,
            text: "Instant credit alert",
        },
        {
            id: 4,
            text: "Customize QR payment terminal",
        },
    ],
    benefits :[
        {
            id: 1,
            text: "Approach and attract more customers.",
        },
        {
            id: 2,
            text: "Low transaction fee.",
        },
        {
            id: 3,
            text: "Simple, cost effective setup.",
        },
        {
            id: 4,
            text: "Accept faster payment.",
        },
        {
            id: 5,
            text: "Security coverage.",
        },
        {
            id: 6,
            text: "Bridge the gap between face-to-face and Digital.",
        },
        {
            id: 7,
            text: "No change, No wahala!.",
        },
    ],
    steps :[
        {
            id: 1,
            img:step1,
            text: "Merchant enter amount for Goods and services.",
        },
        {
            id: 2,
            img:step2,
            text: "Present your PayCode QR code to customers on counter.",
        },
        {
            id: 3,
            img:step3,
            text: "Customer scans the QR code with PayCode app.",
        },
        {
            id: 4,
            img:step4,
            text: "Customer confirms and authenticates payment with pass code.",
        },
    ],
    solutions :[
        {
            id: 1,
            img:solution1,
            text: "Cashless transit.",
        },
        {
            id: 2,
            img:solution2,
            text: "Convenient payment at supermarkets, convenience stores, drug stores, departmental stores.",
        },
        {
            id: 3,
            img:solution3,
            text: "Hospitals.",
        },
        {
            id: 4,
            img:solution4,
            text: "Restaurant & eatery.",
        },
        {
            id: 5,
            img:solution5,
            text: "Clubs & coffee shops.",
        },
    ],
  }
);
export { setGlobalState, useGlobalState, getGlobalState };
