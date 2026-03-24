import { useState } from 'react';
import { Range } from 'react-range';

function PriceRange({ min = 0, max = 1000, onChange }) {
	const [values, setValues] = useState([min, max]);

	return (
		<div style={{ width: '100%', padding: '0 10px' }}>
			<Range
				step={10}
				min={min}
				max={max}
				values={values}
				onChange={(vals) => {
					setValues(vals);
					onChange?.({ min: vals[0], max: vals[1] });
				}}
				renderTrack={({ props, children }) => (
					<div
						{...props}
						style={{
							...props.style,
							height: '6px',
							background: `linear-gradient(to right, #f3f3f4 ${((values[0] - min) / (max - min)) * 100}%, #e28413 ${((values[0] - min) / (max - min)) * 100}%, #e28413 ${
								((values[1] - min) / (max - min)) * 100
							}%, #f3f3f4 ${((values[1] - min) / (max - min)) * 100}%)`,
							borderRadius: '4px',
						}}
					>
						{children}
					</div>
				)}
				renderThumb={({ props, index }) => (
					<div
						{...props}
						aria-label={index === 0 ? 'Minimum price' : 'Maximum price'}
						style={{
							...props.style,
							height: '18px',
							width: '18px',
							borderRadius: '50%',
							backgroundColor: '#e28413',
						}}
					/>
				)}
			/>
			<div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
				<span>{values[0]}€</span>
				<span>{values[1]}€</span>
			</div>
		</div>
	);
}

export default PriceRange;
