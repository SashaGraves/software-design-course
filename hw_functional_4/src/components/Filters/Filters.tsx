import Checkbox from '@mui/material/Checkbox';

import styles from './Filters.module.scss';

interface FiltersProps {
 selected?: string[];
 updateSelected?: (val) => void;
}

const OPTIONS = [
  {
    title: 'Without posts',
  },
  {
    title: 'More than 100 posts',
  },
];

export function Filters({selected, updateSelected}: FiltersProps) {
  // const [selectedFilter, setSelectedFilter] = useState<string[]>(props.selected);

  const onChange = ({ title }) => {
    console.log(title); // for debugging

    let updatedFilters;
    if (selected.find((filter) => filter === title)) {
      updatedFilters = selected.filter(
        (filter) => filter !== title
      );
    } else {
      updatedFilters = [...selected, title];
    }

    updateSelected(updatedFilters)
  };

  return (
    <div className={styles.group}>
      <div className={styles.title}>Filter by posts</div>
      <ul className={styles.list}>
        {OPTIONS.map((option) => (
          <li
            value={option.title}
            onClick={() => onChange(option)}
            key={option.title}
          >
            <Checkbox
              checked={!!selected.find(filter => filter === option.title)}
              value={option.title}
              onChange={() => onChange(option)}
              size="small"
              color="primary"
            />{' '}
            {option.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
