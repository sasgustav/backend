import Knex from 'knex';

export async function seed(knex: Knex) {
  await knex('cars').insert([
    {id: 1, placa: 'ABC-1236', chassi: 's47hx3btzqfx', renavam: "144003058", modelo: "AZERA GLS 3.3 V6 24V 4p Aut.", marca: "Hyundai", ano: "2011-1" },
    {id: 2, placa: 'ACV-3216', chassi: 'sddh667bt7fx', renavam: "144445050", modelo: "Gol LS 1.6 1985/86", marca: "Volkswagen", ano: "1985/86" },
    {id: 3, placa: 'CVA-4125', chassi: 's23hx3basvax', renavam: "662381861", modelo: "Novo HB20 Sense 1.0 12v Flex", marca: "Hyundai", ano: "2021/2022" },
    {id: 4, placa: 'SHO-2444', chassi: 's7sdhxsdzqfx', renavam: "984498161", modelo: "Volkswagen Fox Trend 1.0 2 portas.", marca: "Volkswagen", ano: "2012-1" },
    {id: 5, placa: 'FLO-4153', chassi: 's77sx3btzqfx', renavam: "551115891", modelo: "Citroën C4 Pallas", marca: "Citroën", ano: "2010-10" },
  ]);
}

