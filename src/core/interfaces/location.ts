export interface DepartmentsProps {
  createdAt: string;
  name: string;
  updatedAt: string;
  __v: number;
  _id: string;
  cities: CityProps[];
}

export interface CityProps {
  createdAt: string;
  department: string;
  hasCounterDelivery: 1;
  name: string;
  planType: string;
  storePlanType: string;
  updatedAt: string;
  visibility: true;
  __v: number;
  id: string;
}

export interface CityUser {
  name: string;
  id: string;
}
