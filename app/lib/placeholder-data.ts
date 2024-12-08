// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
// import {ItemHistory} from "@/app/lib/definitions";

const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    username: 'anh',
    password: '123123',
  },
];

const agents = [
  {
    id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    agent: 'Agent 1',
  },
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    agent: 'Agent 2',
  },
];

const items = [
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6112b',
    itemName: 'Nước giặt 1',
    unitPrice: 50000,
    currentVolume: 10,
  },
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6112c',
    itemName: 'Nước giặt 2',
    unitPrice: 55000,
    currentVolume: 15,
  },
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6112d',
    itemName: 'Nước giặt 3',
    unitPrice: 53000,
    currentVolume: 11,
  },
];

const spendreceive = [
  {
    id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd65yt',
    name: 'Lan ứng tiền',
    categoryId: 'Cat1',
    agentId: agents[0].id,
    spend: true,
    amount: 200000,
    createdDate: '2024-10-09',
  },
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    name: 'Nạp tiền',
    categoryId: 'Cat2',
    agentId: agents[1].id,
    spend: true,
    amount: 300000,
    createdDate: '2024-12-02',
  },
  {
    id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    name: 'Trả lương Hồng',
    categoryId: 'Cat1',
    agentId: agents[0].id,
    spend: true,
    amount: 400000,
    createdDate: '2024-10-10',
  },
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a9756h',
    name: 'Nạp tiền',
    categoryId: 'Cat2',
    agentId: agents[1].id,
    spend: false,
    amount: 500000,
    createdDate: '2024-12-03',
  },
];

const itemHistory = [
  {
    id:	'3958dc9e-712f-4377-85e9-fec4b6a6112i',
    // itemId: items[0].id,
    // agentId: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    volume: 10,
    spend: true,
    createdDate:'2024-10-09',
  },
  {
    id:	'3958dc9e-712f-4377-85e9-fec4b6a6112k',
    // itemId: items[1].id,
    // agentId: agents[1].id,
    volume: 15,
    spend: true,
    createdDate:'2024-11-01',
  },
  {
    id:	'3958dc9e-712f-4377-85e9-fec4b6a6112l',
    // itemId: items[1].id,
    // agentId: agents[0].id,
    volume: 4,
    spend: false,
    createdDate:'2024-11-10',
  },
  {
    id:	'3958dc9e-712f-4377-85e9-fec4b6a6112m',
    // itemId: items[0].id,
    // agentId: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    volume: 7,
    spend: false,
    createdDate:'2024-12-02',
  },
];

export { users, items, agents, itemHistory, spendreceive };
