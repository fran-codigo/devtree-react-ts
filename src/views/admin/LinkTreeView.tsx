import DevTreeInput from '../../components/DevTreeInput';
import { social } from '../../data/social';
import { useState } from 'react';

export default function LinkTree() {
  const [devTreeLinks, setDevTreeLinks] = useState(social);

  return (
    <>
      <div className="space-y-5">
        {devTreeLinks.map((item) => (
          <DevTreeInput
            key={item.name}
            item={item}
          />
        ))}
      </div>
    </>
  );
}
