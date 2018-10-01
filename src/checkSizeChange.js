import React, {Component} from 'react';

/**
 * checkSizeChange: Sends props to child - InputComponent 
 * @param {Component} InputComponent child component that will recieve props
 * @param {number} tablet Edit value for isTabletLimit boolean
 * @param {number} mobile Edit value for isMobileLimit boolean
 * @param {array} extraSizes Create extra sizes to compare and pass to child component 
 */

export function checkSizeChange(InputComponent, {tablet = 992, mobile = 576, extraSizes = []} = {}) {
	return class extends Component {
		constructor(props) {
			super(props);
			this.state = {
				isTabletLimit: this.isSmallerThanTestSize(window.innerWidth, tablet),
				isMobileLimit: this.isSmallerThanTestSize(window.innerWidth, mobile),
				extraSizes
			};
			for (let i = 0; i < extraSizes.length; i++) {
				this.state[extraSizes[i].prop] = false;
			}
			this.isSmallerThanTestSize = this.isSmallerThanTestSize.bind(this);
			this.onResize = this.onResize.bind(this);
			this.isTabletLimit = this.isTabletLimit.bind(this);
			this.isMobileLimit = this.isMobileLimit.bind(this);
		}

		isSmallerThanTestSize(currentSize, limitSize) {
			return (currentSize <= limitSize);
		}

		onResize() {
			const tabletBreakSize = this.isSmallerThanTestSize(window.innerWidth, tablet);
			if (tabletBreakSize !== this.state.tabletLimitReached) {
				this.setState({
					isTabletLimit: tabletBreakSize
				});
			}
			const mobileBreakSize = this.isSmallerThanTestSize(window.innerWidth, mobile);
			if (mobileBreakSize !== this.state.mobileLimitReached) {
				this.setState({
					isMobileLimit: mobileBreakSize
				});
			}
			
			const extras = this.state.extraSizes;
			for (let i = 0; i < extras.length; i++) {
				const testSize = this.isSmallerThanTestSize(window.innerWidth, extras[i].limit);
				
				if (testSize !== extras[i].prop) {
					const _prop = () => {
						this.state[extras[i].prop] = testSize;
					};
					this.setState(_prop());
				} 
			}

		}

		

		componentDidMount() {
			window.addEventListener('resize', this.onResize);
			this.onResize();
		}

		componentWillUnmount() {
			window.removeEventListener('resize', this.onResize);
		}

		isTabletLimit() {
			return this.state.isTabletLimit;
		}

		isMobileLimit() {
			return this.state.isMobileLimit;
		}

		render() {
			return (
				<InputComponent {...this.state} {...this.props}/>
			);
		}
	};
}

export default checkSizeChange;
