type qualification = {
  name: string;
  dateOfAcquisition: string;
};

export const QUALIFICATIONS = [
  {
    name: 'HTML5 プロフェッショナル認定試験 レベル1（ver 2.5）',
    dateOfAcquisition: '2022/06',
  },
  {
    name: 'AWS Certified Solutions Architect – Associate',
    dateOfAcquisition: '2019/08（最終更新：2022/08）',
  },
  {
    name: 'Oracle Certified Java Programmer, Gold SE 8',
    dateOfAcquisition: '2017/09',
  },
  {
    name: '基本情報技術者',
    dateOfAcquisition: '2017/05',
  },
  {
    name: 'Oracle Certified Java Programmer, Silver SE 8',
    dateOfAcquisition: '2017/02',
  },
  {
    name: 'Oracle Certified Java Programmer, Bronze SE 7/8',
    dateOfAcquisition: '2016/11',
  },
] satisfies qualification[];
