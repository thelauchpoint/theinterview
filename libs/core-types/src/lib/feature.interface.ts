export interface Pol_eff_date {
  day: number;
  month: number;
  year: number;
  date: string;
}

export interface Pol_exp_date {
  day: number;
  month: number;
  year: number;
  date: string;
}

export interface Pol_bind_date {
  day: number;
  month: number;
  year: number;
  date: string;
}

export interface Cancelation_eff_date {
  date: string;
  year: number;
  month: number;
  day: number;
}

export interface Pol_termination_date {
  date: string;
  year: number;
  month: number;
  day: number;
}

export interface Policy {
  pol_eff_date: Pol_eff_date;
  pol_exp_date: Pol_exp_date;
  policy_number: string;
  binder_number?: any;
  status: string;
  renewal_count: number;
  pol_bind_date: Pol_bind_date;
  cancelation_eff_date: Cancelation_eff_date;
  pol_termination_date: Pol_termination_date;
}

export interface User {
  title: string;
  status: string;
  user: string;
  _id: string;
}

export interface Owner {
  account_id: string;
  users: User[];
}

export interface Rate_schedule_owner {
  account_id: string;
  users: any[];
}

export interface Rate_factor {
  _id: string;
  title: string;
}

export interface Error {
  message?: any;
  error?: any;
}

export interface Data {
  custom_field: string;
  value: number;
  final_value: number;
  pass: boolean;
  junction: string;
  _id: string;
}

export interface Evaluation_factor {
  pass: boolean;
  data: Data[];
  _id: string;
}

export interface Rate_adjustment {
  factor_title: string[];
  rate_factors: Rate_factor[];
  rate_type: string;
  rate: number;
  rate_application: string;
  quote_pure_premium_per_unit: number;
  previous_quote_pure_premium_per_unit: number;
  error: Error;
  total_counted: number;
  count: number;
  evaluation_factors: Evaluation_factor[];
  actions: string[];
  _id: string;
}

export interface Input {
  value: number;
  _id: string;
}

export interface Option {
  limit: string;
  split_limit?: any;
  rate_type: string;
  rate: number;
  rate_application: string;
  rating_factor: string;
  selector: string;
  inputs: Input[];
  is_default: boolean;
}

export interface Coverage_option {
  title: string;
  option_id: string;
  option: Option;
  selected: boolean;
  rate: number;
  rate_type: string;
  rate_application: string;
  rate_application_count: number;
  total: number;
  _id: string;
}

export interface Fee {
  name: string;
  rate_type: string;
  rate: number;
  earned: string;
  tax_exempt: boolean;
  rate_application: string;
  required: boolean;
  selected: boolean;
  total: number;
  _id: string;
}

export interface Rating {
  rate_schedule: string;
  rate_schedule_owner: Rate_schedule_owner;
  rate_adjustments: Rate_adjustment[];
  coverage_options: Coverage_option[];
  fees: Fee[];
  taxes: any[];
  quote_units: number;
  quote_pure_premium_per_unit: number;
  quote_pure_premium: number;
  quote_coverage_premiums: number;
  quote_coverage_total_premium: number;
  total_fees: number;
  total_taxable_premium: number;
  total_taxes: number;
  total_premium_per_unit: number;
  total_premium: number;
  credits: any[];
  admin_locked: boolean;
  _id: string;
}

export interface Premium {
  quote_pure_premium_per_unit: number;
  quote_pure_premium: number;
  quote_coverage_premiums: number;
  quote_coverage_total_premium: number;
  total_fees: number;
  total_earned_premium: number;
  total_taxable_premium: number;
  total_taxes: number;
  total_premium_per_unit: number;
  total_premium: number;
}

export interface Company_start_date {
  date: string;
  year: number;
  month: number;
  day: number;
}

export interface Garage_addres {
  street: string;
  street_2?: any;
  city: string;
  state: string;
  code: string;
  country: string;
}

export interface Mailing_addres {
  street: string;
  street_2?: any;
  city: string;
  state: string;
  code: string;
  country: string;
}

export interface Filing {
  authority: string;
  number?: any;
  _id: string;
}

export interface Data {
  speed_gauge_dot_score: number;
}

export interface Dot {
  census?: any;
  dot_number: string;
  mc_number: string;
  legal_name: string;
  tax_id: string;
  traveling: string;
  dba_name: string;
  telephone: string;
  number_of_employees: number;
  email_address: string;
  radius: number;
  company_start_date: Company_start_date;
  garage_address: Garage_addres;
  mailing_address: Mailing_addres;
  filings: Filing[];
  documents?: any;
  additional_insureds: any[];
  data: Record<string, any>;
}

export interface Power_unit {
  vin: string;
  unit_type: string;
  year: number;
  make: string;
  model: string;
  owned: boolean;
  listed: boolean;
  included: boolean;
  grwv: number;
  total_insured_value?: any;
  documents: any[];
  _id: string;
}

export interface Date_of_birth {
  date: string;
  year: number;
  month: number;
  day: number;
}

export interface Profile {
  first_name: string;
  last_name: string;
  gender: string;
  date_of_birth: Date_of_birth;
  phone?: any;
  marital_status?: any;
}

export interface Hire_date {
  date: string;
  year: number;
  month: number;
  day: number;
}

export interface Experience_date {
  date: string;
  year: number;
  month: number;
  day: number;
}

export interface Driver {
  profile: Profile;
  hire_date: Hire_date;
  experience_date: Experience_date;
  dl_number: string;
  dl_state: string;
  included: boolean;
  listed: boolean;
  minor_violations: number;
  major_violations: number;
  accident_at_fault: number;
  accident_not_at_fault: number;
  _id: string;
}

export interface Eff_date {
  date: string;
  year: number;
  month: number;
  day: number;
}

export interface Premium {
  quote_pure_premium_per_unit: number;
  quote_pure_premium: number;
  quote_coverage_premiums: number;
  quote_coverage_total_premium: number;
  total_fees: number;
  total_taxable_premium: number;
  total_taxes: number;
  total_earned_premium: number;
  total_premium_per_unit: number;
  total_premium: number;
}

export interface Transaction {
  transaction: string;
  eff_date: Eff_date;
  premium: Premium;
  object_id: string;
  created_at: string;
  _id: string;
}

export interface IFeature {
  _id: string;
  policy: Policy;
  status: string;
  owner: Owner;
  rating: Rating[];
  quote_status: string;
  premium: Premium;
  dot: Dot;
  power_units: Power_unit[];
  drivers: Driver[];
  transactions: Transaction;
  changes?: any;
  commision: number;
  net_payment: number;
  earned_premium: number;
}
