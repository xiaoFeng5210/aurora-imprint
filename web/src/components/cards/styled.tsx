import styled from "styled-components";
import {motion} from "framer-motion";

export const CardsContainer =  styled.div`
  /* position: relative; */
  width: 100%;
  height: 100%;
  padding-top: 20px;
  flex: 1;
  overflow-y: auto;
  /* display: grid;
  grid-template-columns: repeat(auto-fill, minmax(620px, 1fr));
  gap: .5rem; */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .5rem;
  /* 滚动条样式消失 */
  scrollbar-width: none;
`


