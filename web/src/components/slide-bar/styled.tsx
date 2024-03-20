import Styled from 'styled-components';

const ItemHeight = `32px`

export const selectedStyle = {
  backgroundColor: `#F2F2F1`,
  color: '#37342F',
  fontWeight: 'bold'
}

export const SlideBarWrapper = Styled.ul`
font-size: 1rem;
width: 100%;
height: 100%;
/* display: flex; */
/* flex-direction: column; */
overflow-y: auto;
scrollbar-width: none;
padding-bottom: 20px;
&::-webkit-scrollbar {
  display: none;
}
`
export const SlideBarItem = Styled.li`
margin-bottom: 6px;
width: 100%;
padding-left: 5px;
border-radius: 4px;
overflow: hidden;
white-space: nowrap; 
text-overflow: ellipsis;
height: ${ItemHeight};
line-height: ${ItemHeight};
&:hover {
  background-color: #EDEDEB;
  cursor: pointer;
}
`

export const WebTitle = Styled.span`

`
