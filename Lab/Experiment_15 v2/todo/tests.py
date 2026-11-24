from django.test import TestCase
from django.urls import reverse

from .models import Task


class TaskCrudTests(TestCase):
    def test_list_page_empty_message(self):
        response = self.client.get(reverse('task_list'))
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, 'No tasks yet')

    def test_add_task(self):
        self.client.post(reverse('add_task'), {'title': 'Write report'})
        self.assertEqual(Task.objects.count(), 1)
        self.assertEqual(Task.objects.first().title, 'Write report')

    def test_blank_title_is_ignored(self):
        self.client.post(reverse('add_task'), {'title': '   '})
        self.assertEqual(Task.objects.count(), 0)

    def test_toggle_task(self):
        task = Task.objects.create(title='Test')
        self.client.post(reverse('toggle_task', args=[task.id]))
        task.refresh_from_db()
        self.assertTrue(task.completed)

    def test_delete_task(self):
        task = Task.objects.create(title='Delete me')
        self.client.post(reverse('delete_task', args=[task.id]))
        self.assertEqual(Task.objects.count(), 0)

    def test_state_changes_require_post(self):
        task = Task.objects.create(title='Safe')
        self.assertEqual(self.client.get(reverse('delete_task', args=[task.id])).status_code, 405)
        self.assertEqual(self.client.get(reverse('toggle_task', args=[task.id])).status_code, 405)
