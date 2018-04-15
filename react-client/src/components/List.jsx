import React from 'react';
import ListItem from './ListItem.jsx';



const List = (props) => (
  <div>
    <h4> Your Current List </h4>
    There are { props.items.length } items.
    { 
        props.items.map(item => 
    	<div key = {item._id}>
    		<h2 input type="checkbox" value="">{item.todo}</h2>
    		<ListItem item={item}/>
    	</div>
    	)

}
  </div>
)

export default List;

