import React,{Component, useState} from 'react';

class FilterList extends Component{
	constructor(props){
		super(props);
		this.state = {
			filter : props.filter || ''
		};
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(event){
		this.setState({'filter': event.target.value});
	}
	_getItems(items,filter){
		const res = items.filter((item)=>{return item.name.indexOf(filter) > -1 ? true : false;});
		return res;
	}
	render(){
		const {items} = this.props;
		const filterdItems = this._getItems(items,this.state.filter);
		return (
			<>
			<input value = {this.state.filter} onChange={this.handleChange} />
			<ul>
				{filterdItems.map(item=><li key={item.key}>{item.name}</li>)}
			</ul>
			</>
			);
	}
}
FilterList.defaultProps ={
	filter: ''
};


export const FilterListHook = (props)=>{
	const [filter, setFilter] = useState(props.filter || '');
	const {items} = props;
	const handleChange = (event)=>{
		setFilter(event.target.value);
	};
	const filterdItems = items.filter(item=>(item.name.indexOf(filter) > -1));
	return (
		<>
		<input value={filter} onChange={handleChange} />
		<ul>
			{filterdItems.map(item=><li key={item.key}>{item.name}</li>)}
		</ul>
		</>
	);
}


export default FilterList;