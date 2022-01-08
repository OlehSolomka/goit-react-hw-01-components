import Profile from 'componenst/Profile/Profile';
import Statistics from 'componenst/Statistic/Statistic';
import FriendList from 'componenst/FriendList/FriendList';
import TransactionHistory from 'componenst/TransactionHistory/TransactionHistory';
import user from 'storage/user.json';
import data from 'storage/data.json';
import friends from 'storage/friends.json';
import transactions from 'storage/transactions.json';

export default function App() {
  return (
    <div>
      <Profile {...user} />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
