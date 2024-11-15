<template>
  <div id="app" class="app-container">
    <div class="announcement-container">
  <img src="@/assets/icon.png" alt="Left Icon" class="icon-left">
  <div class="announcement">
    <h1>New trips on Fall season! Full details on our Instagram account</h1>
  </div>
  <img src="@/assets/icon2.png" alt="Right Icon" class="icon-right">
</div>

    <div class="header-container">
      <div class="date-box">
        <p>{{ formattedDate }}</p>
      </div>
      <div class="adventure-box">
        <h2>Adventure</h2>
      </div>
      <div class="sort-pagination-container">
        <div class="sort-by">
          <p>Rating</p>
        </div>
        <div class="page-indicator">
          <span>{{ currentPage }} / {{ totalPages }}</span>
          <button @click="nextPage" :disabled="currentPage === totalPages" class="arrow">→</button>
        </div>
      </div>
    </div>

    <div class="reviews-container">
      <div class="review-row" v-for="row in displayedPeopleRows" :key="row[0].id">
        <div class="card" v-for="person in row" :key="person.id">
          <div class="person-info">
            <div class="info-background">
              <h3>{{ person.PersonName }}</h3>
              <p class="activity-date">{{ person.PubDate }}</p>
            </div>
            <p>{{ person.Commentary }}</p>
            <p><strong>Rating:</strong>
              <span v-for="n in 5" :key="n" class="star">
                <span v-if="n <= person.Rating">★</span>
                <span v-else>☆</span>
              </span>
            </p>
          </div>
          <div class="avatar-container">
            <img :src="person.Avatar" :alt="person.PersonName" class="avatar">
            <button class="like-button">LIKE</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';

export default {
  data() {
    return {
      people: [
      { id: 1, PersonName: 'Henry Carey', Avatar: require('@/assets/6812873.png'), PubDate: 'Today, 12.00', Rating: 4, Commentary: 'This is awesome adventure!'},
      { id: 2, PersonName: 'Anonymous', Avatar: require('@/assets/2787870.png'), PubDate: '3 days ago, 12:15', Rating: 5, Commentary: 'Something new for me.'},
      { id: 3, PersonName: 'Kirk Cameron', Avatar: require('@/assets/6785593.png'), PubDate: 'Yesterday, 18:30', Rating: 3, Commentary: 'The place is very big. I lost the exit.'},
      { id: 4, PersonName: 'Julia Cain', Avatar: require('@/assets/4086577.png'), PubDate: '10 days ago, 09:05', Rating: 2, Commentary: 'Something to be upgraded.'},
      { id: 5, PersonName: 'Karel Čapek', Avatar: require('@/assets/921053.png'), PubDate: 'Today, 12:00', Rating: 4, Commentary: 'Very beautiful locations and so cool.'},
      { id: 6, PersonName: 'Milla Loren', Avatar: require('@/assets/3884871.png'), PubDate: 'Yesterday, 12:10', Rating: 3, Commentary: 'Good overall, but some improvements are needed.'},
      { id: 7, PersonName: 'Mariah Carey', Avatar: require('@/assets/2118629.png'), PubDate: '2 days ago, 14:15', Rating: 5, Commentary: 'Everything was perfect!'},
      { id: 8, PersonName: 'Nina Brown', Avatar: require('@/assets/921053.png'), PubDate: 'Today, 15:05', Rating: 4, Commentary: 'Had a fantastic time, would definitely come back.'},
      { id: 9, PersonName: 'Anne Conway', Avatar: require('@/assets/4086577.png'), PubDate: '5 days ago, 16:30', Rating: 3, Commentary: 'Decent experience, but not outstanding.' },
      { id: 10, PersonName: 'Zoe Lee', Avatar: require('@/assets/4218292.png'), PubDate: 'Yesterday, 09:00', Rating: 5, Commentary: 'Incredible! Exceeded all my expectations.' },
      { id: 11, PersonName: 'Greg Turner', Avatar: require('@/assets/4202841.png'), PubDate: 'Today, 08:30', Rating: 2, Commentary: 'The place is very big. I lost the exit.'},
      { id: 12, PersonName: 'Tim Collins', Avatar: require('@/assets/4202833.png'), PubDate: 'Today, 13:15', Rating: 4, Commentary: 'Cool.' },
      { id: 13, PersonName: 'Davy Crockett', Avatar: require('@/assets/4439977.png'), PubDate: '2 days ago, 10:45', Rating: 1, Commentary: 'I didnt like it'},
      { id: 14, PersonName: 'Samantha Green', Avatar: require('@/assets/2118629.png'), PubDate: 'Yesterday, 11:25', Rating: 3, Commentary: 'Something new for me.'},
      { id: 15, PersonName: 'Hannah Scott', Avatar: require('@/assets/4086577.png'), PubDate: 'Today, 16:45', Rating: 5, Commentary: 'Everything was perfect!'},
      { id: 16, PersonName: 'Leonardo Clain', Avatar: require('@/assets/4439977.png'), PubDate: '2 days ago, 13:30', Rating: 4, Commentary: 'Had a fantastic time, would definitely come back.'},
      { id: 17, PersonName: 'Emma Brown', Avatar: require('@/assets/2118629.png'), PubDate: '5 days ago, 10:10', Rating: 5, Commentary: 'Everything was perfect!'},
      { id: 18, PersonName: 'Ryan Clark', Avatar: require('@/assets/4439977.png'), PubDate: '3 days ago, 09:35', Rating: 3, Commentary: 'The place is very big. I lost the exit.'},
      { id: 19, PersonName: 'Bill Clinton', Avatar: require('@/assets/4202841.png'), PubDate: 'Today, 12:50', Rating: 4, Commentary: 'Something new for me.' },
      { id: 20, PersonName: 'Tom Clancy', Avatar: require('@/assets/6812873.png'), PubDate: 'Yesterday, 14:20', Rating: 2, Commentary: 'The place is very big. I lost the exit.' }
      ],
      currentPage: 1,
      perPage: 4
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.people.length / this.perPage);
    },
    displayedPeople() {
      const start = (this.currentPage - 1) * this.perPage;
      const end = start + this.perPage;
      return this.people.slice(start, end);
    },
    displayedPeopleRows() {
      return _.chunk(this.displayedPeople, 2);
    }
  },
  methods: {
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    }
  }
}
</script>

<style>
.app-container {
  background-image: url('@/assets/images.png');
  background-size: cover;
  padding: 20px;
  text-align: center;
  color: white;
}

.announcement-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 20px auto;
}

.announcement {
  background: linear-gradient(to bottom, rgb(249, 189, 23), rgba(228, 246, 62, 0.816));
  padding: 20px;
  border-radius: 10px;
  text-align: center;
}

.announcement h1 {
  font-size: 1.5em;
  font-weight: bold;
  color: pink;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
  margin: 0;
}

.icon-left {
  width: 40px;
  height: 40px;
  margin-right: 15px;
}

.icon-right {
  width: 40px;
  height: 40px;
  margin-left: 15px;
}

.reviews-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.review-row {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
}

.card {
  background-color: rgba(55, 190, 231, 0.9);
  width: 400px;
  min-height: 200px;
  border: 1px solid #ccc;
  padding: 15px;
  margin: 10px;
  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.person-info {
  text-align: left;
  flex: 1;
  padding: 10px;
  border-radius: 4px;
}

.avatar-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.avatar {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin-bottom: 10px;
}

.like-button {
  background-color: #4CAF50;
  color: white;
  padding: 5px 10px;
  font-size: 0.8em;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.star {
  color: gold;
}

.page-indicator {
  display: flex;
  align-items: center;
}

.arrow {
  background-color: transparent;
  color: white;
  font-size: 1.5em;
  padding: 0;
  margin-left: 20px;
  border: none;
  cursor: pointer;
  float: right;
}

.arrow:disabled {
  color: gray;
  cursor: not-allowed;
}

.info-background {
  background-color: rgba(200, 200, 200, 0.3);
  padding: 10px;
  border-radius: 4px;
  display: inline-block;
  margin-bottom: 10px;
}
</style>