export class EventMeet {
  id!: number;
  name!: string;
  title!: string;
  categories!: Array<string>;
  poster!: string;
  addressOfEvent!: string;
  dateTimeOfEvent!: Date;
  shortDescription!: string;
  description?: string;
}
