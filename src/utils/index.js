import { Assets } from "../Common";

const homeTellUsAboutCardItemsArr = [
  { name: "Health Service", icon: Assets.images.heartIconRed },
  {
    name: "Organization",
    icon: Assets.images.orgIcon,
  },
  {
    name: "Employee",
    icon: Assets.images.np_employee,
  },
  {
    name: "Insurance",
    icon: Assets.images.np_health_insurance,
  },
];

const homeTellUsAboutRadioItemsArr = [
  { name: "Employee Relation" },
  { name: "presenteeism" },
  { name: "Disjointed EAP" },
  { name: "Too Many Systems" },
  { name: "Employee Engagement" },
  { name: "Remote Teams" },
];

const owlCarouselOptions = {
  loop: false,
  nav: false,
  margin: 25,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1200: {
      items: 3,
    },
  },
};

export {
  homeTellUsAboutCardItemsArr,
  homeTellUsAboutRadioItemsArr,
  owlCarouselOptions,
};
