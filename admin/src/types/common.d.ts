import * as am5 from "@amcharts/amcharts5";

export interface dataItem {
  country: string;
  litres: number;
  bottles: number;
}

export interface dataItems extends Array<dataItem> {}

export interface polarDataItem {
  category: string;
  value: number;
  columnSettings: {
    fill: am5.Color;
  };
}

export interface polarDataItems extends Array<polarDataItem> {}

export interface mapDataItem {
  id: string;
  value: number;
}
export interface mapDataItems extends Array<mapDataItem> {}

interface assignedUser {
  avatar: string;
}

export interface card {
  category: string;
  cardName: string;
  cardImage: string;
  assignedUsers: assignedUser[];
}
// export card;

export interface boardProps {
  boardName: string;
  cards: card[];
} 
