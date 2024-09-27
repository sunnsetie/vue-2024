<template>
  <div id="app" class="app-container">
    <h1>New trips on fall season! Full details on our Instagram account</h1>

    <div class="reviews-container">
      <div class="review-row" v-for="row in displayedPeopleRows" :key="row[0].id">
        <div class="card" v-for="person in row" :key="person.id">
          <img :src="person.Avatar" :alt="person.PersonName" class="avatar">
          <div class="person-info">
            <h3>{{ person.PersonName }}</h3>
            <p><strong>Date:</strong> {{ person.PubDate }}</p>
            <p><strong>Rating:</strong> 
              <span v-for="n in 5" :key="n" class="star">
                <span v-if="n <= person.Rating">★</span>
                <span v-else>☆</span>
              </span> ({{ person.Rating }} / 5)
            </p>
            <p><strong>Commentary:</strong> {{ person.Commentary }}</p>
            <p><strong>Topic:</strong> {{ person.Topic }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="pagination">
      <button @click="prevPage" :disabled="currentPage === 1" class="arrow">←</button>
      <span>Page {{ currentPage }} of {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages" class="arrow">→</button>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';

export default {
  data() {
    return {
      people: [
        { id: 1, PersonName: 'Mark Twen', Avatar: require('@/assets/6812873.png'), PubDate: '2024-09-13 12:00', Rating: 4, Commentary: 'Awesome adventure!', Topic: 'Adventure' },
        { id: 2, PersonName: 'Sally Robinson', Avatar: require('@/assets/2787870.png'), PubDate: '2024-09-12 18:30', Rating: 5, Commentary: 'Exciting experience!', Topic: 'Drive' },
        { id: 3, PersonName: 'Katherine Johns', Avatar: require('@/assets/6785593.png'), PubDate: '2024-09-08 12:15', Rating: 3, Commentary: 'The place is too big.', Topic: 'Exploration' },
        { id: 4, PersonName: 'Stevie', Avatar: require('@/assets/4086577.png'), PubDate: '2024-09-10 09:05', Rating: 2, Commentary: 'Needs improvement.', Topic: 'Upgrades' },
        { id: 5, PersonName: 'Jeff Stud', Avatar: require('@/assets/921053.png'), PubDate: '2024-09-13 12:00', Rating: 4, Commentary: 'Awesome adventure!', Topic: 'Adventure' },
        { id: 6, PersonName: 'Milla Loren', Avatar: require('@/assets/4202841.png'), PubDate: '2024-09-12 12:10', Rating: 3, Commentary: 'Lost my way.', Topic: 'Exploration' },
        { id: 7, PersonName: 'Chris Reed', Avatar: require('@/assets/2118629.png'), PubDate: '2024-09-11 14:15', Rating: 5, Commentary: 'Memorable moments!', Topic: 'Memory' },
        { id: 8, PersonName: 'Nina Brown', Avatar: require('@/assets/4202833.png'), PubDate: '2024-09-09 15:05', Rating: 4, Commentary: 'Enjoyed every moment.', Topic: 'Experience' },
        { id: 9, PersonName: 'Paul Smith', Avatar: require('@/assets/4439977.png'), PubDate: '2024-09-10 16:30', Rating: 3, Commentary: 'Not bad, not great.', Topic: 'Mixed Feelings' },
        { id: 10, PersonName: 'Zoe Lee', Avatar: require('@/assets/4218292.png'), PubDate: '2024-09-13 09:00', Rating: 5, Commentary: 'Amazing trip!', Topic: 'Adventure' },
        { id: 11, PersonName: 'Greg Turner', Avatar: require('@/assets/3884871.png'), PubDate: '2024-09-07 08:30', Rating: 2, Commentary: 'Could be better.', Topic: 'Upgrades' },
        { id: 12, PersonName: 'Amanda White', Avatar: require('@/assets/921053.png'), PubDate: '2024-09-13 13:15', Rating: 4, Commentary: 'Great guide!', Topic: 'Guided Tour' },
        { id: 13, PersonName: 'George Allen', Avatar: require('@/assets/4086577.png'), PubDate: '2024-09-11 10:45', Rating: 1, Commentary: 'Too crowded.', Topic: 'Crowd Issues' },
        { id: 14, PersonName: 'Samantha Green', Avatar: require('@/assets/2118629.png'), PubDate: '2024-09-09 11:25', Rating: 3, Commentary: 'Good but long.', Topic: 'Long Journeys' },
        { id: 15, PersonName: 'Hannah Scott', Avatar: require('@/assets/7810579.png'), PubDate: '2024-09-12 16:45', Rating: 5, Commentary: 'Best time ever!', Topic: 'Adventure' },
        { id: 16, PersonName: 'Jake Hill', Avatar: require('@/assets/4439977.png'), PubDate: '2024-09-08 13:30', Rating: 4, Commentary: 'Fantastic scenery!', Topic: 'Exploration' },
        { id: 17, PersonName: 'Emma Davis', Avatar: require('@/assets/4439977.png'), PubDate: '2024-09-10 10:10', Rating: 5, Commentary: 'Loved every bit.', Topic: 'Experience' },
        { id: 18, PersonName: 'Ryan Clark', Avatar: require('@/assets/2118629.png'), PubDate: '2024-09-11 09:35', Rating: 3, Commentary: 'Decent trip.', Topic: 'Drive' },
        { id: 19, PersonName: 'Sophia Brown', Avatar: require('@/assets/4202841.png'), PubDate: '2024-09-13 12:50', Rating: 4, Commentary: 'Fun and relaxing.', Topic: 'Relaxation' },
        { id: 20, PersonName: 'Liam Harris', Avatar: require('@/assets/6812873.png'), PubDate: '2024-09-12 14:20', Rating: 2, Commentary: 'A bit disappointing.', Topic: 'Upgrades' }
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
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    }
  }
};
</script>

<style>
.app-container {
  background-image: url('@/assets/images.jpg');
  background-size: cover;
  padding: 20px;
  text-align: center;
  color: white;
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
  background-color: rgba(173, 216, 230, 0.9);
  width: 40%;
  min-width: 300px;
  border: 1px solid #ccc;
  padding: 20px;
  margin: 10px;
  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between; /* разместить элементы по сторонам */
  flex-direction: row-reverse; /* аватар справа */
}

.avatar {
  width: 70px; /* увеличиваем размер аватара */
  height: 70px;
  border-radius: 50%;
  margin-left: 15px; /* отступ между аватаром и текстом */
}

.person-info {
  text-align: left;
  flex-grow: 1; /* заполняем пространство текстом */
}

.star {
  color: gold;
}

.pagination {
  margin-top: 20px;
}

.arrow {
  background-color: #4CAF50;
  color: white;
  padding: 10px;
  margin: 5px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.arrow:disabled {
  background-color: #ccc;
}
</style>
